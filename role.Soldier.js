var GetHostile = require('util.GetHostile');

var HandleEnemy = require('task.HandleEnemy');
var Invade = require('task.Invade');
var Wander = require('task.Wander');

function Soldier(creep, debug) 
{
    var site = null;
    var okay = true;
    
    var hostile = GetHostile(creep);
    if (hostile != null)
    {
        okay = !HandleEnemy(creep, hostile, debug);
    }

    if (okay &&
        creep.memory.task == "Invading")
    {
        if (!Invade(creep, debug))
        {
            Wander(creep);
        }
        else
        {
            okay = false;
        }
    }
    
    if (okay)
    {
        creep.memory.target = null;
        creep.memory.task = "Invading";
    }
}

module.exports = Soldier;