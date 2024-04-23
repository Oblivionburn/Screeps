const Position = require("object.Position");
const GetBodyCount = require("util.GetBodyCount");
const GetError = require("util.GetError");
const GoTo = require("task.GoTo");

function Repair(creep, structure) 
{
    creep.memory.task = "Repairing";
    creep.memory.target = structure.id;
    
    const work = GetBodyCount(creep, "work") * 100;
    const hitsMissing = structure.hitsMax - structure.hits;
    
    const total = hitsMissing - work;
    if (total >= 0)
    {
        const result = creep.repair(structure);
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
            console.log(creep.name + " repair Error: " + GetError(result));
        }
    }
}

module.exports = Repair;