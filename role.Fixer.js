var GetStructure = require('util.GetStructure');
var GetRepairs = require('util.GetRepairs');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');
var GetDropped = require('util.GetDropped');
var GetGrave = require('util.GetGrave');

var Siphon = require('task.Siphon');
var Repair = require('task.Repair');
var Grab = require('task.Grab');

function Fixer(creep) 
{
    var site = null;
    var okay = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
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
            Siphon(creep, site);
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
            Grab(creep, site);
        }
    }
    
    if (creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Siphoning")
    {
        site = GetStructure(creep, "Extension", false);
        if (site != null)
        {
            okay = false;
            Siphon(creep, site);
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
                Repair(creep, site);
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
                Repair(creep, site);
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
                Repair(creep, site);
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
                Repair(creep, site);
            }
        }
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Siphoning";
    }
}

module.exports = Fixer;