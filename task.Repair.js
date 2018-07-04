var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Repair(creep, structure, debug) 
{
    creep.memory.task = "Repairing";
    creep.memory.target = structure.id;
    
    var total = structure.hitsMax - structure.hits - (GetBodyCount(creep, "work") * 100);
    if (total < 0)
    {
        total = 0;
    }
    
    var result = creep.repair(structure);
    if (result == 0) 
    {
        if (debug)
        {
            creep.say(total, false);
        }
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), false);
    }
}

module.exports = Repair;