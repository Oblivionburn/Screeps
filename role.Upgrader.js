var GetDistance = require('util.GetDistance');
var GetStructure = require('util.GetStructure');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');

var Harvest = require('task.Harvest');
var Upgrade = require('task.Upgrade');
var Grab = require('task.Grab');
var Siphon = require('task.Siphon');
var Transfer = require('task.Transfer');
var HandleEnemy = require('task.HandleEnemy');

function Upgrader(creep, debug) 
{
    var site = null;
    var okay = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        okay = !HandleEnemy(creep, hostile, debug);
    }

    if (okay &&
        creep.carry.energy < creep.carryCapacity &&
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
        creep.carry.energy > 0 &&
        creep.room.controller.progress < creep.room.controller.progressTotal)
    {
        okay = false;
        Upgrade(creep, creep.room.controller, debug);
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Harvesting";
    }
}

module.exports = Upgrader;