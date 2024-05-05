const Task = require("object.Task");
const GetHostile = require("util.GetHostile");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");
const GetSourceToHarvest = require("util.GetSourceToHarvest");
const Combat = require("task.Combat");
const Harvest = require("task.Harvest");
const Upgrade = require("task.Upgrade");

function Upgrader(creep) 
{
    const debug = true;
    
    const currentTask = creep.memory.task;
    const energy = creep.store[RESOURCE_ENERGY];
    const controller = creep.room.controller;
    const controllerProgress = controller.progress;
    const controllerProgressTotal = controller.progressTotal;
    
    let task = null;
    let target = null;
    
    target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
    if (target != null)
    {
        task = new Task("Combat", target);
    }
    
    if (task == null)
    {
        if (energy > 0 &&
            currentTask != "Harvesting" &&
            controllerProgress < controllerProgressTotal)
        {
            task = new Task("Upgrade", controller);
        }
    }
    
    if (task == null)
    {
        if (CanHoldMoreEnergy(creep) &&
            creep.ticksToLive > 30)
        {
            source = GetSourceToHarvest(creep);
            if (source != null)
            {
                task = new Task("Harvest", source);
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
            case "Combat":
                Combat(creep, task.Target);
                break;
            case "Harvest":
                Harvest(creep, task.Target);
                break;
            case "Upgrade":
                Upgrade(creep, task.Target);
                break;
        }
    }
}

module.exports = Upgrader;