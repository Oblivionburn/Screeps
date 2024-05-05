const Task = require("object.Task");
const GetStructures = require("util.GetStructures");
const GetRoomToInvade = require("util.GetRoomToInvade");
const GetHostile = require("util.GetHostile");
const GetSiteToBuild = require("util.GetSiteToBuild");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");
const GetSourceToHarvest = require("util.GetSourceToHarvest");
const Invade = require("task.Invade");
const Formation = require("task.Formation");
const Harvest = require("task.Harvest");
const Build = require("task.Build");

function Invader(creep)
{
    const currentTask = creep.memory.task;
    
    let task = null;
    let target = null;
    
    if (creep.room.controller &&
        creep.room.controller.my &&
        GetStructures(creep.room, "spawn").length > 0)
    {
        roomName = GetRoomToInvade(creep.room);
        task = new Task("Invade", roomName);
    }
    else
    {
        target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
        if (target != null)
        {
            task = new Task("Formation", target);
        }
        
        if (task == null)
        {
            if (currentTask != "Harvesting" &&
                creep.store[RESOURCE_ENERGY] > 0)
            {
                site = GetSiteToBuild(creep);
                if (site != null)
                {
                    task = new Task("Build", site);
                }
            }
        }
        
        if (task == null)
        {
            if (CanHoldMoreEnergy(creep))
            {
                source = GetSourceToHarvest(creep);
                if (source != null)
                {
                    task = new Task("Harvest", source);
                }
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
            case "Invade":
                Invade(creep, task.Target);
                break;
            case "Formation":
                Formation(creep, task.Target);
                break;
            case "Harvest":
                Harvest(creep, task.Target);
                break;
            case "Build":
                Build(creep, task.Target);
                break;
        }
    }
}

module.exports = Invader;