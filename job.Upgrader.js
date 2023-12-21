/*
    Used by:
        handle.Creeps
*/

const GetTask = require("ai.GetTask");
const Attack = require("task.Attack");
const Harvest = require("task.Harvest");
const Upgrade = require("task.Upgrade");

function Upgrader(creep) 
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Attack")
        {
            Attack(creep, task.Target);
        }
        else if (task.Name == "Harvest")
        {
            Harvest(creep, task.Target);
        }
        else if (task.Name == "Upgrade")
        {
            Upgrade(creep, task.Target);
        }
    }
}

module.exports = Upgrader;