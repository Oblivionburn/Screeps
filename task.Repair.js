var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Repair(creep, structure) 
{
    creep.memory.task = "Repairing";
    creep.memory.target = structure.id;
    
    var total = structure.hitsMax - structure.hits - (GetBodyCount(creep, "work") * 100);
    
    var result = creep.repair(structure);
    if (result == 0) 
    {
        creep.say(total, false);
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
    else
    {
        creep.say("Error: " + GetError(result));
    }
}

module.exports = Repair;