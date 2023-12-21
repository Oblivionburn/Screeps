/*
    Used by:
        job.Upgrader
*/

const Position = require("object.Position");
const GoTo = require("task.GoTo");
const Pave = require("task.Pave");

function Upgrade(creep, structure) 
{
    creep.memory.task = "Upgrading";
    creep.memory.target = structure.id;
    
    Pave(creep);
    
    var total = structure.progressTotal - structure.progress - 1;
    
    var result = creep.upgradeController(structure);
    if (result == 0) 
    {
        creep.say(total, true);
    }
    else if (result == ERR_NOT_IN_RANGE)
    {
        var position = new Position(structure.pos.x, structure.pos.y);
        GoTo(creep, position, creep.memory.task);
    }
    else
    {
        console.log(creep.name + " upgrade Error: " + GetError(result));
    }
}

module.exports = Upgrade;