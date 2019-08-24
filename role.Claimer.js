var Invade = require('task.Invade');
var Wander = require('task.Wander');

function Claimer(creep, invasion, debug) 
{
    var site = null;
    var needTask = true;

    if (needTask &&
        creep.memory.task == "Claiming")
    {
        //Find available controller to claim
        //if found then needTask = false;
    }
    
    if (needTask)
    {
        if (invasion)
        {
            if (!Invade(creep, debug))
            {
                Wander(creep);
            }
        }
        else
        {
            Wander(creep, debug);
        }
    }
    
    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Claiming";
    }
}

module.exports = Claimer;