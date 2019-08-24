var GetHostile = require('util.GetHostile');

var HandleEnemy = require('task.HandleEnemy');
var Invade = require('task.Invade');
var Wander = require('task.Wander');

function Soldier(creep, debug) 
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
        Wander(creep);
        /*
        if (!Invade(creep, debug))
        {
            Wander(creep);
        }
        else
        {
            needTask = false;
        }
        */
    }
    
    if (needTask)
    {
        creep.memory.target = null;
        creep.memory.task = "Invading";
    }
}

module.exports = Soldier;