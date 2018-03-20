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

    var result = creep.harvest(structure);
    if (result == 0) 
    {
        creep.say(total + "/" + creep.carryCapacity, false);
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}
    
module.exports = Harvest;