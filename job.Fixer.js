const GetTask = require("ai.GetTask");
const Formation = require("task.Formation");
const Siphon = require("task.Siphon");
const Repair = require("task.Repair");
const Transfer = require("task.Transfer");

function Fixer(creep)
{
    const task = GetTask(creep);
    if (task != null)
    {
        switch (task.Name)
        {
            case "Formation":
                Formation(creep, task.Target);
                break;
            case "Siphon":
                Siphon(creep, task.Target);
                break;
            case "Repair":
                Repair(creep, task.Target);
                break;
            case "Transfer":
                Transfer(creep, task.Target);
        }
    }
}

module.exports = Fixer;