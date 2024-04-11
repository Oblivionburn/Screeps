const Position = require("object.Position");
const GetDistance = require("util.GetDistance");
const GetError = require("util.GetError");
const GoTo = require("task.GoTo");

function Heal(creep, target) 
{
    creep.memory.task = "Healing";
    creep.memory.target = target.id;

    const hitsMissing = target.hitsMax - target.hits;
    const total = hitsMissing + 12;
    if (total > target.hitsMax)
    {
        total = target.hitsMax;
    }
    
    let withinRange = false;
    
    const distance = GetDistance(creep.pos.x, creep.pos.y, target.pos.x, target.pos.y);
    if (distance <= 2)
    {
        withinRange = true;
    }
    
    if (withinRange)
    {
        const result = creep.heal(target);
        if (result == ERR_NOT_IN_RANGE)
        {
            withinRange = false;
        }
        else if (result == 0) 
        {
            creep.say(total, true);
        }
        else
        {
            console.log(creep.name + " heal Error: " + GetError(result));
        }
    }
    
    if (!withinRange)
    {
        var position = new Position(target.pos.x, target.pos.y);
        GoTo(creep, position, creep.room.name, creep.memory.task);
    }
}

module.exports = Heal;