const Position = require('object.Position');
const GetCreeps = require('util.GetCreeps');
const GetBodyCount = require('util.GetBodyCount');
const GetNearestThing = require('util.GetNearestThing');
const GetDistance = require('util.GetDistance');
const Combat = require('task.Combat');
const GoTo = require('task.GoTo');

function Formation(creep, hostile) 
{
    creep.memory.task = "Formation";
    creep.memory.target = hostile.id;
    
    let ready = false;
    const warriors = [];
    
    const creeps = GetCreeps(creep.room, "All");
    for (let i = 0; i < creeps.length; i++)
    {
        const otherCreep = creeps[i];
        if (otherCreep.id != creep.id)
        {
            const attackParts = GetBodyCount(otherCreep, "attack");
            if (attackParts > 0)
            {
                warriors.push(otherCreep);
            }
        }
    }
    
    if (warriors.length > 0)
    {
        const nearestWarrior = GetNearestThing(creep.pos.x, creep.pos.y, warriors);
        
        const distance = GetDistance(creep.pos.x, creep.pos.y, nearestWarrior.pos.x, nearestWarrior.pos.y);
        if (distance > 2)
        {
            var position = new Position(nearestWarrior.pos.x, nearestWarrior.pos.y);
            GoTo(creep, position, creep.room.name, creep.memory.task);
        }
        else
        {
            ready = true;
        }
    }
    else
    {
        ready = true;
    }
    
    if (ready)
    {
        Combat(creep, hostile);
    }
}

module.exports = Formation;