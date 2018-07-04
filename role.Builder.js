var GetStructure = require('util.GetStructure');
var GetRepairs = require('util.GetRepairs');
var Available = require('util.Available');
var GetHostile = require('util.GetHostile');

var Build = require('task.Build');
var Siphon = require('task.Siphon');
var Repair = require('task.Repair');
var HandleEnemy = require('task.HandleEnemy');

function Builder(creep, debug) 
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
        site = GetStructure(creep, "Site", false);
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Build(creep, site, debug);
            }
        }
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Siphoning";
    }
}

module.exports = Builder;