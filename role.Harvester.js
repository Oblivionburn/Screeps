var GetStructure = require('util.GetStructure');
var Available = require('util.Available');

var Harvest = require('task.Harvest');
var Transfer = require('task.Transfer');

function Harvester(creep, debug) 
{
    var site = null;
    var okay = true;
    
    if (creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Harvesting") 
    {
        site = GetStructure(creep, "Source");
        if (site != null)
        {
            okay = false;
            Harvest(creep, site, debug);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Spawn", true);
        if (site != null) 
        {
            okay = false;
            Transfer(creep, site, debug);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Extension", true);
        if (site != null)
        {
            okay = false;
            Transfer(creep, site, debug);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Tower", true);
        if (site != null) 
        {
            okay = false;
            Transfer(creep, site, debug);
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
                Transfer(creep, builder, debug);
                break;
            }
        }
    }
    
    if (okay &&
        creep.carry.energy > 0)
    {
        for (var name in Game.creeps) 
        {
            var builder = Game.creeps[name];
            if (builder.memory.role == 'Fixer' &&
                builder.carry.energy < builder.carryCapacity &&
                Available(creep, builder.id)) 
            {
                okay = false;
                Transfer(creep, builder, debug);
                break;
            }
        }
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Harvesting";
    }
}

module.exports = Harvester;
