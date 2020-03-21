var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Harvest(creep, structure, debug) 
{
    creep.memory.task = "Harvesting";
    creep.memory.target = structure.id;
    
    Pave(creep);
    
    var total = GetBodyCount(creep, "work") * 2;
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
        var result = creep.harvest(structure);
        if (result == 0) 
        {
            if (debug)
            {
                creep.say(total + "/" + creep.store.getCapacity(RESOURCE_ENERGY), true);
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
        
        return true;
    }
    
    return false;
}
    
module.exports = Harvest;