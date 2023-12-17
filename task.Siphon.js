const Position = require("object.Position");
const GetError = require("util.GetError");
const GoTo = require("task.GoTo");
const Pave = require("task.Pave");

function Siphon(creep, structure) 
{
    creep.memory.task = "Siphoning";
    creep.memory.target = structure.id;
    
    let total = 0;
    if (structure.store != null)
    {
        total = structure.store[RESOURCE_ENERGY];
    }
    else if (structure.energy != null)
    {
        total = structure.energy;
    }
    
    if (creep.store[RESOURCE_ENERGY] + total > creep.store.getCapacity(RESOURCE_ENERGY))
    {
        total = creep.store.getCapacity(RESOURCE_ENERGY);
    }
    
    if (total > 0)
    {
        const result = creep.withdraw(structure, RESOURCE_ENERGY);
        if (result == 0) 
        {
            creep.say(total + "/" + creep.store.getCapacity(RESOURCE_ENERGY), true);
        }
        else if (result == ERR_NOT_IN_RANGE)
        {
            const position = new Position(structure.pos.x, structure.pos.y);
            GoTo(creep, position, creep.memory.task);
        }
        else
        {
            //console.log(creep.name + " siphon Error: " + GetError(result));
        }
    }
}

module.exports = Siphon;