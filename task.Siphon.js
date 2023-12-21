const Position = require("object.Position");
const GetError = require("util.GetError");
const GoTo = require("task.GoTo");
const Pave = require("task.Pave");

function Siphon(creep, structure) 
{
    creep.memory.task = "Siphoning";
    creep.memory.target = structure.id;
    
    const energy = creep.store[RESOURCE_ENERGY];
    const maxEnergy = creep.store.getCapacity(RESOURCE_ENERGY);
    
    let total = structure.store[RESOURCE_ENERGY];
    
    if (energy + total > maxEnergy)
    {
        total = maxEnergy - energy;
    }
    
    if (total > 0)
    {
        const result = creep.withdraw(structure, RESOURCE_ENERGY);
        if (result == 0) 
        {
            creep.say("Took:" + total, true);
            creep.memory.task = "";
            creep.memory.target = "";
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