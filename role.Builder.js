var GetStructure = require('util.GetStructure');
var GetRepairs = require('util.GetRepairs');
var Available = require('util.Available');

var Build = require('task.Build');
var Siphon = require('task.Siphon');
var Repair = require('task.Repair');

function Builder(creep) 
{
    var site = null;
    var okay = true;
    
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
        site = GetStructure(creep, "Site", false);
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                okay = false;
                Build(creep, site);
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