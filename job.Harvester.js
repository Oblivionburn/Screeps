const Task = require("object.Task");
const GetHostile = require("util.GetHostile");
const GetTransferTarget = require("util.GetTransferTarget");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");
const GetSourceToHarvest = require("util.GetSourceToHarvest");
const Combat = require("task.Combat");
const Harvest = require("task.Harvest");
const Transfer = require("task.Transfer");

function Harvester(creep)
{
    const currentTask = creep.memory.task;
    
    let task = null;
    let target = null;
    
    target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
    if (target != null)
    {
        task = new Task("Combat", target);
    }
        
    if (task == null &&
        currentTask != "Harvesting" &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        target = GetTransferTarget(creep);
        if (target != null)
        {
            task = new Task("Transfer", target);
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
            case "Transfer":
                Transfer(creep, task.Target);
                break;
        }
    }
}

module.exports = Harvester;