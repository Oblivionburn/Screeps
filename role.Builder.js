var GetStructure = require('util.GetStructure');
var Available = require('util.Available');

var Build = require('task.Build');
var Siphon = require('task.Siphon');

function Builder(creep) 
{
    var okay = true;
    
    var site = GetStructure(creep, "Site", false);
    if (site != null)
    {
        if (creep.carry.energy > 0 &&
            creep.memory.task == "Building")
        {
            okay = false;
            Build(creep, site);
        }
    }
    
    if (okay)
    {
        if (creep.carry.energy < creep.carryCapacity)
        {
            var extension = GetStructure(creep, "Extension", false);
            if (extension != null)
            {
                okay = false;
                Siphon(creep, extension);
            }
        }
    }
    
    if (okay)
    {
        creep.memory.task = "Building";
    }
}

module.exports = Builder;