var GetHostile = require('util.GetHostile');

var HandleEnemy = require('task.HandleEnemy');
var Invade = require('task.Invade');
var Wander = require('task.Wander');

function Soldier(creep, invasion, debug) 
{
    var site = null;
    var needTask = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        needTask = !HandleEnemy(creep, hostile, debug);
    }

    if (needTask &&
        creep.memory.task == "Invading")
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
        creep.memory.task = "Invading";
    }
}

module.exports = Soldier;