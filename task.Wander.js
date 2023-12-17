const Position = require("object.Position");
const GoTo = require("task.GoTo");

function Wander(creep) 
{
    creep.memory.task = "Patrolling";
    
    let choice = Math.floor(Math.random() * 8);
    choice++;
    
    let position = null;
    if (choice == TOP)
    {
        position = new Position(creep.pos.x, creep.pos.y - 1);
    }
    else if (choice == TOP_RIGHT)
    {
        position = new Position(creep.pos.x + 1, creep.pos.y - 1);
    }
    else if (choice == RIGHT)
    {
        position = new Position(creep.pos.x + 1, creep.pos.y);
    }
    else if (choice == BOTTOM_RIGHT)
    {
        position = new Position(creep.pos.x + 1, creep.pos.y + 1);
    }
    else if (choice == BOTTOM)
    {
        position = new Position(creep.pos.x, creep.pos.y + 1);
    }
    else if (choice == BOTTOM_LEFT)
    {
        position = new Position(creep.pos.x - 1, creep.pos.y + 1);
    }
    else if (choice == LEFT)
    {
        position = new Position(creep.pos.x - 1, creep.pos.y);
    }
    else if (choice == TOP_LEFT)
    {
        position = new Position(creep.pos.x - 1, creep.pos.y - 1);
    }
    
    if (position.X != 0 &&
        position.X != 49 &&
        position.Y != 0 &&
        position.Y != 49)
    {
        GoTo(creep, position, creep.memory.task);
    }
}

module.exports = Wander;