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
    
    if (okay &&
        creep.carry.energy > 0)
    {
        var spawn = GetStructure(creep, "Spawn", true);
        if (spawn != null) 
        {
            okay = false;
            Transfer(creep, spawn);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        var extension = GetStructure(creep, "Extension", true);
        if (extension != null)
        {
            okay = false;
            Transfer(creep, extension);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        var tower = GetStructure(creep, "Tower", true);
        if (tower != null) 
        {
            okay = false;
            Transfer(creep, tower);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        for (var name in Game.creeps) 
        {
            var builder = Game.creeps[name];
            if (builder.memory.role == 'Builder' &&
                builder.carry.energy < builder.carryCapacity &&
                Available(creep, builder.id)) 
            {
                okay = false;
                Transfer(creep, builder);
                break;
            }
        }
    }
    
    if (okay)
    {
        creep.memory.task = "Harvesting";
    }
}

module.exports = Harvester;