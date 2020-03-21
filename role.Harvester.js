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
        creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Harvesting") 
    {
        site = GetStructure(creep, "Source");
        if (site != null)
        {
            needTask = !Harvest(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Spawn", true);
        if (site != null) 
        {
            needTask = !Transfer(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Extension", true);
        if (site != null)
        {
            needTask = !Transfer(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Tower", true);
        if (site != null) 
        {
            needTask = !Transfer(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.carry.energy > 0)
    {
        var builders = GetCreeps(creep.room, "Builder");
        for (let i = 0; i < builders.length; i++) 
        {
            var builder = builders[i];
            if (builder.carry.energy < builder.carryCapacity) 
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
        creep.carry.energy > 0)
    {
        var fixers = GetCreeps(creep.room, "Fixer");
        for (let i = 0; i < fixers.length; i++)
        {
            var fixer = fixers[i];
            if (fixer.carry.energy < fixer.carryCapacity) 
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
