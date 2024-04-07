const GetTask = require("ai.GetTask");
const Invade = require("task.Invade");
const Harvest = require("task.Harvest");
const Build = require("task.Build");

function Invader(creep)
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Invade")
        {
            Invade(creep, task.Target);
        }
        else if (task.Name == "Harvest")
        {
            Harvest(creep, task.Target);
        }
        else if (task.Name == "Build")
        {
            Build(creep, task.Target);
        }
    }
}

module.exports = Invader;