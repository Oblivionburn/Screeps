const Task = require("object.Task");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");
const GetSourceToHarvest = require("util.GetSourceToHarvest");
const GetTransferTarget = require("util.GetTransferTarget");
const GetSiteToBuild = require("util.GetSiteToBuild");
const GetSiphonTarget = require("util.GetSiphonTarget");
const GetRepairTarget = require("util.GetRepairTarget");
const GetHostile = require("util.GetHostile");
const GetStructures = require("util.GetStructures");
const GetRoomToInvade = require("util.GetRoomToInvade");

function GetTask(creep)
{
    let task = null;
    
    const job = creep.memory.job;
    const currentTask = creep.memory.task;
    
    if (job == "Harvester")
    {
        if (currentTask != "Harvesting" &&
            creep.store[RESOURCE_ENERGY] > 0)
        {
            const target = GetTransferTarget(creep);
            if (target != null)
            {
                task = new Task("Transfer", target);
            }
        }
        
        if (task == null)
        {
            if (CanHoldMoreEnergy(creep))
            {
                const source = GetSourceToHarvest(creep);
                if (source != null)
                {
                    task = new Task("Harvest", source);
                }
            }
            else
            {
                //Reset to stop harvesting
                creep.memory.task = null;
                creep.memory.target = null;
            }
        }
    }
    else if (job == "Upgrader")
    {
        const target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
        if (target != null)
        {
            task = new Task("Attack", target);
        }
        
        if (task == null &&
            currentTask != "Harvesting" &&
            creep.store[RESOURCE_ENERGY] > 0 &&
            creep.room.controller.progress < creep.room.controller.progressTotal)
        {
            task = new Task("Upgrade", creep.room.controller);
        }
        
        if (task == null)
        {
            if (CanHoldMoreEnergy(creep))
            {
                const source = GetSourceToHarvest(creep);
                if (source != null)
                {
                    task = new Task("Harvest", source);
                }
            }
            else
            {
                //Reset to stop harvesting
                creep.memory.task = null;
                creep.memory.target = null;
            }
        }
    }
    else if (job == "Builder")
    {
        const target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
        if (target != null)
        {
            task = new Task("Attack", target);
        }
        
        if (task == null &&
            creep.store[RESOURCE_ENERGY] == 0)
        {
            const target = GetSiphonTarget(creep);
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
    }
    else if (job == "Fixer")
    {
        const target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
        if (target != null)
        {
            task = new Task("Attack", target);
        }
        
        if (task == null &&
            creep.store[RESOURCE_ENERGY] == 0)
        {
            const target = GetSiphonTarget(creep);
            if (target != null)
            {
                task = new Task("Siphon", target);
            }
        }
        
        if (task == null &&
            creep.store[RESOURCE_ENERGY] > 0)
        {
            const target = GetRepairTarget(creep);
            if (target != null)
            {
                task = new Task("Repair", target);
            }
        }
        
        if (task == null &&
            creep.store[RESOURCE_ENERGY] > 0)
        {
            const target = GetTransferTarget(creep);
            if (target != null)
            {
                task = new Task("Transfer", target);
            }
        }
    }
    else if (job == "Soldier")
    {
        const target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
        if (target != null)
        {
            task = new Task("Attack", target);
        }
        
        if (task == null)
        {
            const spawns = GetStructures(creep.room, "spawn");
            if (spawns.length > 0)
            {
                const spawn = spawns[0];
                task = new Task("Guard", spawn);
            }
            else
            {
                task = new Task("Wander", null);
            }
        }
    }
    else if (job == "Claimer")
    {
        const roomName = GetRoomToInvade(creep.room);
        if (roomName != null)
        {
            task = new Task("Claim", roomName);
        }
    }
    else if (job == "Invader")
    {
        if (creep.room.controller.my)
        {
            const roomName = GetRoomToInvade(creep.room);
            task = new Task("Invade", roomName);
        }
        else
        {
            const target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
            if (target != null)
            {
                task = new Task("Attack", target);
            }
            
            if (task == null)
            {
                if (currentTask != "Harvesting" &&
                    creep.store[RESOURCE_ENERGY] > 0)
                {
                    const site = GetSiteToBuild(creep);
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
                    const source = GetSourceToHarvest(creep);
                    if (source != null)
                    {
                        task = new Task("Harvest", source);
                    }
                }
                else
                {
                    //Reset to stop harvesting
                    creep.memory.task = null;
                    creep.memory.target = null;
                }
            }
        }
    }
    
    return task;
}

module.exports = GetTask;