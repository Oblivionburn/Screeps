var GetStructure = require('util.GetStructure');
var Available = require('util.Available');

var Harvest = require('task.Harvest');
var Transfer = require('task.Transfer');

function Harvester(creep) 
{
    var okay = true;
    
    if (creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Harvesting") 
    {
        var source = GetStructure(creep, "Source");
        if (source != null)
        {
            okay = false;
            Harvest(creep, source);
        }
    }
    
    if (okay)
    {
        creep.memory.task = "Harvesting";
    }
}

module.exports = Harvester;
