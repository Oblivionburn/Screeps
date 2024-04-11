const GetTask = require("ai.GetTask");
const Combat = require("task.Combat");
const Heal = require("task.Heal");

function Healer(creep)
{
    const task = GetTask(creep);
    if (task != null)
    {
        switch (task.Name)
        {
            case "Combat":
                Combat(creep, task.Target);
                break;
            case "Heal":
                Heal(creep, task.Target);
        }
    }
}

module.exports = Healer;