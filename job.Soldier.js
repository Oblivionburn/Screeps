const Task = require("object.Task");
const GetHostile = require("util.GetHostile");
const GetCreeps_Other = require("util.GetCreeps_Other");
const GetNearestThing = require("util.GetNearestThing");
const Formation = require("task.Formation");
const Guard = require("task.Guard");

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
        const otherCreeps = GetCreeps_Other(creep, guardJobsFilter);
        if (otherCreeps.length > 0)
        {
            const otherCreep = GetNearestThing(creep.pos.x, creep.pos.y, otherCreeps);
            if (otherCreep)
            {
                task = new Task("Guard", otherCreep);
            }
        }
        else
        {
            task = new Task("Wander", null);
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
            case "Formation":
                Formation(creep, task.Target);
                break;
            case "Guard":
                Guard(creep, task.Target);
                break;
        }
    }
}

module.exports = Soldier;