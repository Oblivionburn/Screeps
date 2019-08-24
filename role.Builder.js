var Vector = require('Vector');
var GetStructure = require('util.GetStructure');
var GetRepairs = require('util.GetRepairs');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');
var NextTo = require('util.NextTo');

var Siphon = require('task.Siphon');
var Repair = require('task.Repair');
var Build = require('task.Build');
var HandleEnemy = require('task.HandleEnemy');
var Wander = require('task.Wander');
var WaitNear = require('task.WaitNear');
var GoTo = require('task.GoTo');

function Builder(creep, debug) 
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
            site = GetStructure(creep, "Site", false);
            if (site != null)
            {
                WaitNear(creep, site, debug);
            }
            else
            {
                Wander(creep);
            }
        }
    }
    
    if (needTask)
    {
        site = GetStructure(creep, "Site", false);
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Build(creep, site, debug);
            }
        }
    }
    
    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Siphoning";
    }
}

module.exports = Builder;