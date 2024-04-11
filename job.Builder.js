const GetTask = require("ai.GetTask");
const Combat = require("task.Combat");
const Siphon = require("task.Siphon");
const Build = require("task.Build");
const WaitNear = require("task.WaitNear");

function Builder(creep)
{
    const task = GetTask(creep);
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
            case "Build":
                Build(creep, task.Target);
                break;
            case "WaitNear":
                WaitNear(creep, task.Target);
        }
    }
}

module.exports = Builder;