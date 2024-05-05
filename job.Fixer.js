const Task = require("object.Task");
const GetHostile = require("util.GetHostile");
const GetSiphonTarget = require("util.GetSiphonTarget");
const GetRepairTarget = require("util.GetRepairTarget");
const GetTransferTarget = require("util.GetTransferTarget");
const Combat = require("task.Combat");
const Siphon = require("task.Siphon");
const Repair = require("task.Repair");
const Transfer = require("task.Transfer");

function Fixer(creep)
{
    let task = null;
    let target = null;
    
    target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
    if (target != null)
    {
        task = new Task("Combat", target);
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
    
    if (task == null &&
        creep.store[RESOURCE_ENERGY] > 0)
    {
        target = GetRepairTarget(creep);
        if (target != null)
        {
            task = new Task("Repair", target);
        }
    }
    
    if (task == null &&
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
            case "Siphon":
                Siphon(creep, task.Target);
                break;
            case "Repair":
                Repair(creep, task.Target);
                break;
            case "Transfer":
                Transfer(creep, task.Target);
                break;
        }
    }
}

module.exports = Fixer;