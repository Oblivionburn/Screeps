const Position = require("object.Position");
const GoTo = require("task.GoTo");
const Pave = require("task.Pave");

function Upgrade(creep, structure) 
{
    creep.memory.task = "Upgrading";
    creep.memory.target = structure.id;
    
    Pave(creep);
    
    const total = structure.progressTotal - structure.progress - 1;
    
    const result = creep.upgradeController(structure);
    if (result == ERR_NOT_IN_RANGE)
    {
        const position = new Position(structure.pos.x, structure.pos.y);
        GoTo(creep, position, creep.room.name, creep.memory.task);
    }
    else if (result == 0) 
    {
        creep.say(total, true);
    }
    else
    {
        console.log(creep.name + " upgrade Error: " + GetError(result));
    }
}

module.exports = Upgrade;