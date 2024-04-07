const GetTask = require("ai.GetTask");
const Claim = require("task.Claim");

function Claimer(creep)
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Claim")
        {
            Claim(creep, task.Target);
        }
    }
}

module.exports = Claimer;