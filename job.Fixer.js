const GetTask = require("ai.GetTask");
const Attack = require("task.Attack");
const Siphon = require("task.Siphon");
const Repair = require("task.Repair");
const Transfer = require("task.Transfer");

function Fixer(creep)
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
        else if (task.Name == "Repair")
        {
            Repair(creep, task.Target);
        }
        else if (task.Name == "Transfer")
        {
            Transfer(creep, task.Target);
        }
    }
}

module.exports = Fixer;