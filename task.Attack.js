/*
    Used by:
        job.Builder
        job.Fixer
        job.Soldier
        job.Upgrader
*/

const GetDistance = require("util.GetDistance");
const GetBodyCount = require("util.GetBodyCount");
const Assault = require("task.Assault");
const Flee = require("task.Flee");
const Formation = require("task.Formation");

function Attack(creep, hostile) 
{
    const distance = GetDistance(creep.pos.x, creep.pos.y, hostile.pos.x, hostile.pos.y);
    if (GetBodyCount(creep, "attack") > 0)
    {
        if (distance <= 2)
        {
            creep.say("Die!", true);
            creep.attack(hostile);
        }
        else
        {
            const inFormation = Formation(creep, hostile);
            if (inFormation)
            {
                Assault(creep, hostile);
            }
        }
    }
    else if (GetBodyCount(creep, "ranged_attack") > 0)
    {
        if (distance <= 4)
        {
            creep.say("Die!", true);
            creep.attack(hostile);
        }
        else
        {
            const inFormation = Formation(creep, hostile);
            if (inFormation)
            {
                Assault(creep, hostile);
            }
        }
    }
    else if (distance <= 6 &&
             creep.room.controller.safeMode == 0)
    {
        Flee(creep, hostile);
    }
}
    
module.exports = Attack;