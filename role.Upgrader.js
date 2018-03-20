var GetDistance = require('util.GetDistance');
var GetStructure = require('util.GetStructure');
var Available = require('util.Available');

var Harvest = require('task.Harvest');
var Upgrade = require('task.Upgrade');
var Grab = require('task.Grab');
var Siphon = require('task.Siphon');
var Transfer = require('task.Transfer');

function Upgrader(creep) 
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
            Harvest(creep, site);
        }
    }
    
    if (okay &&
        creep.carry.energy > 0 &&
        creep.room.controller.progress < creep.room.controller.progressTotal)
    {
        okay = false;
        Upgrade(creep, creep.room.controller);
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Harvesting";
    }
}

module.exports = Upgrader;