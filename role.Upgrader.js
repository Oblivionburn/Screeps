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
            needTask = false;
            Harvest(creep, site, debug);
        }
    }
    
    if (needTask &&
        creep.store[RESOURCE_ENERGY] > 0 &&
        creep.room.controller.progress < creep.room.controller.progressTotal)
    {
        needTask = false;
        Upgrade(creep, creep.room.controller, debug);
    }
    
    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Harvesting";
    }
}

module.exports = Upgrader;