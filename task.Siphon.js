var Vector = require('Vector');
var GetWork = require('util.GetWork');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Siphon(creep, structure) 
{
    creep.memory.task = "Siphoning";
    creep.memory.target = structure.id;
    
    var total = structure.energy;
    if (creep.carry.energy + total > creep.carryCapacity)
    {
        total = creep.carryCapacity;
    }
    
    var result = creep.withdraw(structure, RESOURCE_ENERGY);
    if (result == 0) 
    {
        creep.say(total + "/" + creep.carryCapacity, false);
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
    else
    {
        creep.say("Error: " + GetError(result));
    }
}

module.exports = Siphon;