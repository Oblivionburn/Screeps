var GetDistance = require('util.GetDistance');
var GetBodyCount = require('util.GetBodyCount');

var Assault = require('task.Assault');
var Flee = require('task.Flee');

function HandleEnemy(creep, hostile, debug) 
{
    var result = false;
    
    var distance = GetDistance(creep.pos.x, creep.pos.y, hostile.pos.x, hostile.pos.y);
    if (GetBodyCount(creep, "attack") > 0)
    {
        result = true;
        if (distance <= 2)
        {
            creep.say("Die!", true);
            creep.attack(hostile);
        }
        else
        {
            Assault(creep, hostile, debug);
        }
    }
    else if (GetBodyCount(creep, "ranged_attack") > 0)
    {
        result = true;
        if (distance <= 4)
        {
            creep.say("Die!", true);
            creep.attack(hostile);
        }
        else
        {
            Assault(creep, hostile, debug);
        }
    }
    else if (distance <= 6 &&
             creep.room.controller.safeMode == 0)
    {
        result = true;
        Flee(creep, hostile, debug);
    }
    
    return result;
}
    
module.exports = HandleEnemy;