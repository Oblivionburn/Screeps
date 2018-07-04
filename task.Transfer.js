var Vector = require('Vector');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Transfer(creep, structure, debug) 
{
    creep.memory.task = "Transfering";
    creep.memory.target = structure.id;
    
    var transfering = creep.carry.energy;
    var canHold = structure.energyCapacity - structure.energy;
    if (canHold < transfering)
    {
        transfering = canHold;
    }
    
    var result = creep.transfer(structure, RESOURCE_ENERGY);
    if (result == 0) 
    {
        if (debug)
        {
            creep.say("Give:" + transfering, false);
        }
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), false);
    }
}

module.exports = Transfer;