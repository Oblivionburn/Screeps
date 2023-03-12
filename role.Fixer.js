var GetStructure = require('util.GetStructure');
var GetRepairs = require('util.GetRepairs');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');
var GetDropped = require('util.GetDropped');
var GetGrave = require('util.GetGrave');
var GetCreeps = require('util.GetCreeps');

var Siphon = require('task.Siphon');
var Repair = require('task.Repair');
var Transfer = require('task.Transfer');
var Grab = require('task.Grab');
var HandleEnemy = require('task.HandleEnemy');
var Wander = require('task.Wander');

function Fixer(creep, debug) 
{
    var site = null;
    var needTask = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        needTask = !HandleEnemy(creep, hostile, debug);
    }
    
    if (needTask)
    {
        site = GetGrave(creep);
        if (site != null &&
            creep.store[RESOURCE_ENERGY] == 0 &&
            Available(creep, site.id))
        {
            needTask = !Siphon(creep, site, debug);
        }
    }
    
    if (needTask)
    {
        site = GetDropped(creep);
        if (site != null &&
            creep.store[RESOURCE_ENERGY] == 0 &&
            Available(creep, site.id))
        {
            needTask = false;
            Grab(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] == 0 &&
        creep.memory.task == "Siphoning")
    {
        site = GetStructure(creep, "Ruin", false);
        if (site != null)
        {
            needTask = !Siphon(creep, site, debug);
        }
    }

    if (needTask &&
        creep.store[RESOURCE_ENERGY] == 0 &&
        creep.memory.task == "Siphoning")
    {
        site = GetStructure(creep, "Extension", false);
        if (site != null)
        {
            needTask = !Siphon(creep, site, debug);
        }
    }

    if (needTask)
    {
        if (creep.store[RESOURCE_ENERGY] > 0)
        {
            site = GetRepairs(creep, "Spawn");
            if (site != null)
            {
                needTask = !Repair(creep, site, debug);
            }
            
            if (needTask)
            {
                site = GetRepairs(creep, "Extension");
                if (site != null)
                {
                    needTask = !Repair(creep, site, debug);
                }
            }
            
            if (needTask)
            {
                site = GetRepairs(creep, "Tower");
                if (site != null)
                {
                    needTask = !Repair(creep, site, debug);
                }
            }
            
            if (needTask)
            {
                site = GetRepairs(creep, "Road");
                if (site != null)
                {
                    needTask = !Repair(creep, site, debug);
                }
            }
            
            if (needTask)
            {
                site = GetRepairs(creep, "Rampart");
                if (site != null)
                {
                    needTask = !Repair(creep, site, debug);
                }
            }
            
            if (needTask)
            {
                site = GetStructure(creep, "Spawn", true);
                if (site != null) 
                {
                    needTask = !Transfer(creep, site, debug);
                }
            }
            
            if (needTask)
            {
                site = GetStructure(creep, "Extension", true);
                if (site != null) 
                {
                    needTask = !Transfer(creep, site, debug);
                }
            }
            
            if (needTask)
            {
                var builders = GetCreeps(creep.room, "Builder");
                
                var count = builders.length;
                for (let i = 0; i < count; i++)
                {
                    var builder = builders[i];
                    if (builder.store[RESOURCE_ENERGY] < builder.store.getCapacity(RESOURCE_ENERGY) &&
                        Available(creep, builder.id)) 
                    {
                        needTask = !Transfer(creep, builder, debug);
                        break;
                    }
                }
            }
            
            if (needTask)
            {
                site = GetRepairs(creep, "Wall");
                if (site != null)
                {
                    needTask = !Repair(creep, site, debug);
                }
            }
        }
    }

    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Siphoning";
        Wander(creep, debug);
    }
}

module.exports = Fixer;