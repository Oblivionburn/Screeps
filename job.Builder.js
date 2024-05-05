const Task = require("object.Task");
const GetHostile = require("util.GetHostile");
const GetSiphonTarget = require("util.GetSiphonTarget");
const GetSiteToBuild = require("util.GetSiteToBuild");
const Attack = require("task.Attack");
const Siphon = require("task.Siphon");
const Build = require("task.Build");
const WaitNear = require("task.WaitNear");

function Builder(creep)
{
    let task = null;
    let target = null;
    
    target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
    if (target != null)
    {
        task = new Task("Attack", target);
    }
    
    if (task == null &&
        creep.store[RESOURCE_ENERGY] == 0 &&
        creep.ticksToLive > 30)
    {
        target = GetSiphonTarget(creep);
        if (target != null)
        {
            task = new Task("Siphon", target);
        }
    }
    
    if (task == null)
    {
        const site = GetSiteToBuild(creep);
        if (site != null)
        {
            if (creep.store[RESOURCE_ENERGY] > 0)
            {
                task = new Task("Build", site);
            }
            else
            {
                task = new Task("WaitNear", site);
            }
        }
    }
    
    if (task == null)
    {
        creep.memory.task = null;
        creep.memory.target = null;
    }
    
    if (task != null)
    {
        switch (task.Name)
        {
            case "Attack":
                Combat(creep, task.Target);
                break;
            case "Siphon":
                Siphon(creep, task.Target);
                break;
            case "Build":
                Build(creep, task.Target);
                break;
            case "WaitNear":
                WaitNear(creep, task.Target);
                break;
        }
    }
}

module.exports = Builder;