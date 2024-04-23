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
    
    const warriors = GetCreeps(creep.room, "All")
        .filter(warrior.id != creep.id &&
                GetBodyCount(otherCreep, "attack") > 0);
    if (warriors.length > 0)
    {
        const nearestWarrior = GetNearestThing(creep.pos.x, creep.pos.y, warriors);
        
        const distance = GetDistance(creep.pos.x, creep.pos.y, nearestWarrior.pos.x, nearestWarrior.pos.y);
        if (distance > 2)
        {
            const position = new Position(nearestWarrior.pos.x, nearestWarrior.pos.y);
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