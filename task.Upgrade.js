var Vector = require('Vector');
var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Upgrade(creep, structure, debug) 
{
    creep.memory.task = "Upgrading";
    creep.memory.target = structure.id;
    
    Pave(creep);
    
    var total = structure.progressTotal - structure.progress - 1;
    
    var result = creep.upgradeController(structure);
    if (result == 0) 
    {
        if (debug)
        {
            creep.say(total, true);
        }
    }
    else if (result == ERR_NOT_IN_RANGE)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), true);
    }
}

module.exports = Upgrade;