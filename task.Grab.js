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
            if (creep.carry.energy + total > creep.carryCapacity)
            {
                total = creep.carryCapacity;
            }
            else
            {
                total += creep.carry.energy;
            }
            
            creep.say(total + "/" + creep.carryCapacity, true);
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