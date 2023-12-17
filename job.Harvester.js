const GetTask = require("ai.GetTask");
const Harvest = require("task.Harvest");
const Transfer = require("task.Transfer");

function Harvester(creep)
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Harvest")
        {
            Harvest(creep, task.Target);
        }
        else if (task.Name == "Transfer")
        {
            Transfer(creep, task.Target);
        }
    }
}

module.exports = Harvester;