var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Grab(creep, target, debug) 
{
    creep.memory.task = "Grabbing";
    creep.memory.target = target.id;
    
    var result = creep.pickup(target);
    if (result == 0) 
    {
        if (debug)
        {
            var total = target.amount;
            if (creep.store[RESOURCE_ENERGY] + total > creep.store.getCapacity(RESOURCE_ENERGY))
            {
                total = creep.store.getCapacity();
            }
            else
            {
                total += creep.store[RESOURCE_ENERGY];
            }
            
            creep.say(total + "/" + creep.store.getCapacity(RESOURCE_ENERGY), true);
        }
    }
    else if (result == ERR_NOT_IN_RANGE)
    {
        var location = new Vector(target.pos.x, target.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), true);
    }
}
    
module.exports = Grab;