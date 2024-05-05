const Task = require("object.Task");
const GetHostile = require("util.GetHostile");
const GetCreeps_ToGuard = require("util.GetCreeps_ToGuard");
const GetNearestThing = require("util.GetNearestThing");
const GetStructures = require("util.GetStructures");
const Formation = require("task.Formation");
const Guard = require("task.Guard");
const Wander = require("task.Wander");

function Soldier(creep) 
{
    let task = null;
    let target = null;
    
    target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
    if (target != null)
    {
        task = new Task("Formation", target);
    }
    
    if (task == null)
    {
        const guardJobsFilter = ["Soldier", "Invader", "Claimer"];
        const otherCreeps = GetCreeps_ToGuard(creep, guardJobsFilter);
        if (otherCreeps.length > 0)
        {
            target = GetNearestThing(creep.pos.x, creep.pos.y, otherCreeps);
            if (target != null)
            {
                task = new Task("Guard", target);
            }
        }
    }
    
    if (task == null)
    {
        const spawn = GetStructures(creep.room, "spawn");
        if (spawn != null)
        {
            task = new Task("Guard", spawn);
        }
    }
    
    if (task == null)
    {
        task = new Task("Wander", null);
    }
    
    if (task != null)
    {
        switch (task.Name)
        {
            case "Formation":
                Formation(creep, task.Target);
                break;
            case "Guard":
                Guard(creep, task.Target);
                break;
            case "Wander":
                Wander(creep);
                break;
        }
    }
}

module.exports = Soldier;