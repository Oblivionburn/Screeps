var Vector = require('Vector');
var GetWork = require('util.GetWork');
var GoTo = require('task.GoTo');

function Repair(creep, structure) 
{
    creep.memory.task = "Repairing";
    creep.memory.target = structure.id;
    
    var total = structure.hitsMax - structure.hits - (GetWork(creep) * 5);
    
    var result = creep.repair(structure);
    if (result == 0) 
    {
        creep.say(total, false);
    }
    else
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}

module.exports = Repair;