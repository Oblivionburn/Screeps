var GetStructure = require('util.GetStructure');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');
var GetCreeps = require('util.GetCreeps');

var Harvest = require('task.Harvest');
var Transfer = require('task.Transfer');
var HandleEnemy = require('task.HandleEnemy');

function Harvester(creep, debug) 
{
    var site = null;
    var needTask = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        needTask = !HandleEnemy(creep, hostile, debug);
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] < creep.store.getCapacity(RESOURCE_ENERGY) &&
        creep.memory.task == "Harvesting") 
    {
        site = GetStructure(creep, "Source");
        if (site != null)
        {
            needTask = !Harvest(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        site = GetStructure(creep, "Spawn", true);
        if (site != null) 
        {
            needTask = !Transfer(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        site = GetStructure(creep, "Extension", true);
        if (site != null)
        {
            needTask = !Transfer(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        site = GetStructure(creep, "Tower", true);
        if (site != null) 
        {
            needTask = !Transfer(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        var builders = GetCreeps(creep.room, "Builder");
        
        var count = builders.length;
        for (let i = 0; i < count; i++)
        {
            var builder = builders[i];
            if (builder.store[RESOURCE_ENERGY] < builder.store.getCapacity(RESOURCE_ENERGY)) 
            {
                if (creep.memory.target == builder.id ||
                    (Available(creep, builder.id) && creep.memory.target == null))
                {
                    needTask = !Transfer(creep, builder, debug);
                    break;
                }
            }
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        var fixers = GetCreeps(creep.room, "Fixer");
        
        var count = fixers.length;
        for (let i = 0; i < count; i++)
        {
            var fixer = fixers[i];
            if (fixer.store[RESOURCE_ENERGY] < fixer.store.getCapacity(RESOURCE_ENERGY)) 
            {
                if (creep.memory.target == fixer.id ||
                    (Available(creep, fixer.id) && creep.memory.target == null))
                {
                    needTask = !Transfer(creep, fixer, debug);
                    break;
                }
            }
        }
    }
    
    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Harvesting";
    }
}

module.exports = Harvester;
