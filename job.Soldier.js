const GetTask = require("ai.GetTask");
const Attack = require("task.Attack");
const Guard = require("task.Guard");

function Soldier(creep) 
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Attack")
        {
            Attack(creep, task.Target);
        }
        else if (task.Name == "Guard")
        {
            Guard(creep, task.Target);
        }
    }
}

module.exports = Soldier;