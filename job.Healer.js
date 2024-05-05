const Task = require("object.Task");
const GetInjured = require("util.GetInjured");
const GetHostile = require("util.GetHostile");
const Combat = require("task.Combat");
const Heal = require("task.Heal");

function Healer(creep)
{
    let task = null;
    let target = null;
    
    target = GetInjured(creep.room, creep.pos.x, creep.pos.y);
    if (target != null)
    {
        task = new Task("Heal", target);
    }
    
    if (task == null)
    {
        target = GetHostile(creep.room, creep.pos.x, creep.pos.y);
        if (target != null)
        {
            task = new Task("Combat", target);
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
            case "Heal":
                Heal(creep, task.Target);
                break;
        }
    }
}

module.exports = Healer;