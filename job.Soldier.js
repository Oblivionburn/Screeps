const GetTask = require("ai.GetTask");
const Formation = require("task.Formation");
const Guard = require("task.Guard");

function Soldier(creep) 
{
    const task = GetTask(creep);
    if (task != null)
    {
        switch (task.Name)
        {
            case "Formation":
                Formation(creep, task.Target);
                break;
            case "Guard":
                Guard(creep, task.Target);
        }
    }
}

module.exports = Soldier;