const GetTask = require("ai.GetTask");
const Formation = require("task.Formation");
const Harvest = require("task.Harvest");
const Upgrade = require("task.Upgrade");

function Upgrader(creep) 
{
    const task = GetTask(creep);
    if (task != null)
    {
        switch (task.Name)
        {
            case "Formation":
                Formation(creep, task.Target);
                break;
            case "Harvest":
                Harvest(creep, task.Target);
                break;
            case "Upgrade":
                Upgrade(creep, task.Target);
        }
    }
}

module.exports = Upgrader;