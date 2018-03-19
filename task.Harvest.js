var Vector = require('Vector');
var GetWork = require('util.GetWork');

var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Harvest(creep, structure) 
{
    creep.memory.task = "Harvesting";
    creep.memory.target = structure.id;
    
    var total = GetWork(creep) * 2;
    if (creep.carry.energy + total > creep.carryCapacity)
    {
        total = creep.carryCapacity;
    }
    else
    {
        total += creep.carry.energy;
    }
    
    Pave(creep);
    if (creep.harvest(structure) != ERR_NOT_IN_RANGE) 
    {
        creep.say(total + "/" + creep.carryCapacity, false);
    }
    else
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location);
    }
}
    
module.exports = Harvest;