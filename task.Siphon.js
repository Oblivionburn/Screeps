var Vector = require('Vector');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Siphon(creep, structure, debug) 
{
    creep.memory.task = "Siphoning";
    creep.memory.target = structure.id;
    
    var total = 0;
    if (structure.store != null)
    {
        total = structure.store.energy;
    }
    else if (structure.energy != null)
    {
        total = structure.energy;
    }
    
    if (creep.carry.energy + total > creep.carryCapacity)
    {
        total = creep.carryCapacity;
    }
    
    var result = creep.withdraw(structure, RESOURCE_ENERGY);
    if (result == 0) 
    {
        if (debug)
        {
            creep.say(total + "/" + creep.carryCapacity, false);
        }
    }
    else if (result == ERR_NOT_IN_RANGE)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), false);
    }
}

module.exports = Siphon;