const GetTask = require("ai.GetTask");
const Invade = require("task.Invade");
const Formation = require("task.Formation");
const Harvest = require("task.Harvest");
const Build = require("task.Build");

function Invader(creep)
{
    const task = GetTask(creep);
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
        }
    }
}

module.exports = Invader;