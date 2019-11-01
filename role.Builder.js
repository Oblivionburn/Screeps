var GetStructure = require('util.GetStructure');
var GetHostile = require('util.GetHostile');

var Siphon = require('task.Siphon');
var Build = require('task.Build');
var HandleEnemy = require('task.HandleEnemy');
var WaitNear = require('task.WaitNear');

function Builder(creep, debug) 
{
    var needTask = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        needTask = !HandleEnemy(creep, hostile, debug);
    }
    
    if (needTask &&
        creep.carry.energy == 0 &&
        creep.memory.task == "Siphoning")
    {
        var site = GetStructure(creep, "Extension", false);
        if (site != null)
        {
            needTask = !Siphon(creep, site, debug);
        }
    }
    
    if (needTask)
    {
        var site = GetStructure(creep, "Site", false);
        if (site != null)
        {
            if (creep.carry.energy > 0)
            {
                needTask = false;
                Build(creep, site, debug);
            }
            else
            {
                WaitNear(creep, site, debug);
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