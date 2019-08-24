var Vector = require('Vector');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Transfer(creep, thing, debug) 
{
    creep.memory.task = "Transfering";
    creep.memory.target = thing.id;
    
    var transfering = creep.carry.energy;
    var canHold = 0;
    
    if (thing.carry != null)
    {
        canHold = thing.carryCapacity - thing.carry.energy;
    }
    else
    {
        canHold = thing.energyCapacity - thing.energy;
    }
    
    if (canHold < transfering)
    {
        transfering = canHold;
    }
    
    var result = creep.transfer(thing, RESOURCE_ENERGY);
    if (result == 0) 
    {
        if (debug)
        {
            creep.say("Gave:" + transfering, false);
            creep.memory.task = "";
            creep.memory.target = "";
        }
    }
    else if (result == ERR_NOT_IN_RANGE)
    {
        var location = new Vector(thing.pos.x, thing.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), false);
    }
}

module.exports = Transfer;