var Vector = require('Vector');
var GoTo = require('task.GoTo');

function Flee(creep, hostile, debug) 
{
    creep.memory.task = "Fleeing";
    
    var location = null;
    
    if (creep.pos.x < hostile.pos.x)
    {
        if (creep.pos.y < hostile.pos.y)
        {
            location = new Vector(creep.pos.x - 1, creep.pos.y - 1);
        }
        else if (creep.pos.y > hostile.pos.y)
        {
            location = new Vector(creep.pos.x - 1, creep.pos.y + 1);
        }
        else if (creep.pos.y == hostile.pos.y)
        {
            location = new Vector(creep.pos.x - 1, creep.pos.y);
        }
    }
    else if (creep.pos.x > hostile.pos.x)
    {
        if (creep.pos.y < hostile.pos.y)
        {
            location = new Vector(creep.pos.x + 1, creep.pos.y - 1);
        }
        else if (creep.pos.y > hostile.pos.y)
        {
            location = new Vector(creep.pos.x + 1, creep.pos.y + 1);
        }
        else if (creep.pos.y == hostile.pos.y)
        {
            location = new Vector(creep.pos.x + 1, creep.pos.y);
        }
    }
    else if (creep.pos.x == hostile.pos.x)
    {
        if (creep.pos.y < hostile.pos.y)
        {
            location = new Vector(creep.pos.x, creep.pos.y - 1);
        }
        else if (creep.pos.y > hostile.pos.y)
        {
            location = new Vector(creep.pos.x, creep.pos.y + 1);
        }
    }
    
    GoTo(creep, location, creep.memory.task, debug);
}

module.exports = Flee;