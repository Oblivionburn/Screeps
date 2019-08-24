var GetStructure = require('util.GetStructure');
var GetRepairs = require('util.GetRepairs');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');
var GetDropped = require('util.GetDropped');
var GetGrave = require('util.GetGrave');

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
            creep.carry.energy < creep.carryCapacity &&
            Available(creep, site.id))
        {
            needTask = false;
            Siphon(creep, site, debug);
        }
    }
    
    if (needTask)
    {
        site = GetDropped(creep);
        if (site != null &&
            creep.carry.energy < creep.carryCapacity &&
            Available(creep, site.id))
        {
            needTask = false;
            Grab(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Siphoning")
    {
        site = GetStructure(creep, "Extension", false);
        if (site != null)
        {
            needTask = false;
            Siphon(creep, site, debug);
        }
        else
        {
            Wander(creep);
        }
    }
    
    if (needTask)
    {
        site = GetRepairs(creep, "Spawn");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (needTask)
    {
        site = GetRepairs(creep, "Extension");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (needTask)
    {
        site = GetRepairs(creep, "Tower");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (needTask)
    {
        site = GetRepairs(creep, "Road");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (needTask)
    {
        site = GetRepairs(creep, "Rampart");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (needTask)
    {
        site = GetRepairs(creep, "Wall");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (needTask &&
        creep.carry.energy > 0)
    {
        for (var name in Game.creeps) 
        {
            var builder = Game.creeps[name];
            if (builder.memory.role == 'Builder' &&
                builder.carry.energy < builder.carryCapacity &&
                Available(creep, builder.id)) 
            {
                needTask = false;
                Transfer(creep, builder, debug);
                break;
            }
        }
    }
    
    if (needTask &&
        creep.carry.energy > 0)
    {
        site = GetStructure(creep, "Spawn", true);
        if (site != null) 
        {
            needTask = false;
            Transfer(creep, site, debug);
        }
    }
    
    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Siphoning";
    }
}

module.exports = Fixer;