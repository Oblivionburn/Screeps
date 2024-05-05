const Position = require("object.Position");
const GetBodyCount = require("util.GetBodyCount");
const GetError = require("util.GetError");
const GoTo = require("task.GoTo");
const Pave = require('task.Pave');

function Harvest(creep, structure) 
{
    creep.memory.task = "Harvesting";
    creep.memory.target = structure.id;
    
    if (creep.memory.job != "Invader")
    {
        Pave(creep);
    }
    
    let total = GetBodyCount(creep, "work") * 2;
    if (creep.store[RESOURCE_ENERGY] + total > creep.store.getCapacity(RESOURCE_ENERGY))
    {
        total = creep.store.getCapacity(RESOURCE_ENERGY);
    }
    else
    {
        total += creep.store[RESOURCE_ENERGY];
    }

    if (total > 0)
    {
        const result = creep.harvest(structure);
        if (result == ERR_NOT_IN_RANGE)
        {
            const position = new Position(structure.pos.x, structure.pos.y);
            GoTo(creep, position, creep.room.name, creep.memory.task);
        }
        else if (result == 0) 
        {
            creep.say(total + "/" + creep.store.getCapacity(RESOURCE_ENERGY), true);
        }
        else if (result != -6)
        {
            console.log(creep.name + " harvest Error: " + GetError(result));
        }
    }
}
    
module.exports = Harvest;