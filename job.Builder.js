/*
    Used by:
        handle.Creeps
*/

const GetTask = require("ai.GetTask");
const Attack = require("task.Attack");
const Siphon = require("task.Siphon");
const Build = require("task.Build");
const WaitNear = require("task.WaitNear");

function Builder(creep)
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Attack")
        {
            Attack(creep, task.Target);
        }
        else if (task.Name == "Siphon")
        {
            Siphon(creep, task.Target);
        }
        else if (task.Name == "Build")
        {
            Build(creep, task.Target);
        }
        else if (task.Name == "WaitNear")
        {
            WaitNear(creep, task.Target);
        }
    }
}

module.exports = Builder;