const Position = require("object.Position");
const GoTo = require("task.GoTo");

function Flee(creep, hostile) 
{
    creep.memory.task = "Fleeing";
    
    let position = null;
    
    if (creep.pos.x < hostile.pos.x)
    {
        if (creep.pos.y < hostile.pos.y)
        {
            position = new Position(creep.pos.x - 1, creep.pos.y - 1);
        }
        else if (creep.pos.y > hostile.pos.y)
        {
            position = new Position(creep.pos.x - 1, creep.pos.y + 1);
        }
        else if (creep.pos.y == hostile.pos.y)
        {
            position = new Position(creep.pos.x - 1, creep.pos.y);
        }
    }
    else if (creep.pos.x > hostile.pos.x)
    {
        if (creep.pos.y < hostile.pos.y)
        {
            position = new Position(creep.pos.x + 1, creep.pos.y - 1);
        }
        else if (creep.pos.y > hostile.pos.y)
        {
            position = new Position(creep.pos.x + 1, creep.pos.y + 1);
        }
        else if (creep.pos.y == hostile.pos.y)
        {
            position = new Position(creep.pos.x + 1, creep.pos.y);
        }
    }
    else if (creep.pos.x == hostile.pos.x)
    {
        if (creep.pos.y < hostile.pos.y)
        {
            position = new Position(creep.pos.x, creep.pos.y - 1);
        }
        else if (creep.pos.y > hostile.pos.y)
        {
            position = new Position(creep.pos.x, creep.pos.y + 1);
        }
    }
    
    GoTo(creep, position, creep.memory.task);
}

module.exports = Flee;