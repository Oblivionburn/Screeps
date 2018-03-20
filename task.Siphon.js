var Vector = require('Vector');
var GetWork = require('util.GetWork');

var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Siphon(creep, structure) 
{
    creep.memory.task = "Siphoning";
    creep.memory.target = structure.id;
    
    var total = (GetWork(creep) * 2);
    if (creep.carry.energy + total > creep.carryCapacity)
    {
        total = creep.carryCapacity;
    }
    else
    {
        total += creep.carry.energy;
    }
    
    if (creep.withdraw(structure, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) 
    {
        creep.say(total + "/" + creep.carryCapacity, false);
    }
    else
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}

module.exports = Siphon;