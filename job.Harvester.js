const GetTask = require("ai.GetTask");
const Combat = require("task.Combat");
const Harvest = require("task.Harvest");
const Transfer = require("task.Transfer");

function Harvester(creep)
{
    const task = GetTask(creep);
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
        }
    }
}

module.exports = Harvester;