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

function Fixer(creep, debug) 
{
    var site = null;
    var okay = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        creep.say("Intruder!");
        
        var distance = GetDistance(creep.pos.x, creep.pos.y, hostile.pos.x, hostile.pos.y);
        if (distance < 2)
        {
            okay = false;
            creep.say("Die!");
            creep.attack(hostile);
        }
    }
    
    if (okay)
    {
        site = GetGrave(creep);
        if (site != null &&
            creep.carry.energy < creep.carryCapacity &&
            Available(creep, site.id))
        {
            okay = false;
            Siphon(creep, site, debug);
        }
    }
    
    if (okay)
    {
        site = GetDropped(creep);
        if (site != null &&
            creep.carry.energy < creep.carryCapacity &&
            Available(creep, site.id))
        {
            okay = false;
            Grab(creep, site, debug);
        }
    }
    
    if (creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Siphoning")
    {
        site = GetStructure(creep, "Extension", false);
        if (site != null)
        {
            okay = false;
            Siphon(creep, site, debug);
        }
    }
    
    if (okay)
    {
        site = GetRepairs(creep, "Spawn");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (okay)
    {
        site = GetRepairs(creep, "Extension");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (okay)
    {
        site = GetRepairs(creep, "Tower");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (okay)
    {
        site = GetRepairs(creep, "Road");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (okay)
    {
        site = GetRepairs(creep, "Rampart");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Repair(creep, site, debug);
            }
        }
    }
    
    if (okay)
    {
        site = GetRepairs(creep, "Wall");
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Repair(creep, site, debug);
            }
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
        site = GetStructure(creep, "Spawn", true);
        if (site != null) 
        {
            okay = false;
            Transfer(creep, site, debug);
        }
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Siphoning";
    }
}

module.exports = Fixer;