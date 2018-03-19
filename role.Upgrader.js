var GetHostile = require('util.GetHostile');
var GetDistance = require('util.GetDistance');
var GetStructure = require('util.GetStructure');
var GetDropped = require('util.GetDropped');
var GetGrave = require('util.GetGrave');
var Available = require('util.Available');

var Harvest = require('task.Harvest');
var Upgrade = require('task.Upgrade');
var Grab = require('task.Grab');
var Siphon = require('task.Siphon');
var Transfer = require('task.Transfer');

function Upgrader(creep) 
{
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
        var grave = GetGrave(creep);
        if (grave != null &&
            creep.carry.energy < creep.carryCapacity &&
            Available(creep, grave.id))
        {
            okay = false;
            Siphon(creep, grave);
        }
    }
    
    if (okay)
    {
        var loot = GetDropped(creep);
        if (loot != null &&
            creep.carry.energy < creep.carryCapacity &&
            Available(creep, loot.id))
        {
            okay = false;
            Grab(creep, loot);
        }
    }
    
    if (okay &&
        creep.carry.energy < creep.carryCapacity &&
        creep.memory.task == "Harvesting")
    {
        okay = false;
        Harvest(creep, GetStructure(creep, "Source"));
    }
    
    if (okay &&
        creep.carry.energy > 0 &&
        creep.room.controller.progress < creep.room.controller.progressTotal)
    {
        okay = false;
        Upgrade(creep, creep.room.controller);
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

module.exports = Upgrader;