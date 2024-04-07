const Position = require("object.Position");
const GoTo = require("task.GoTo");
const GoToward = require("task.GoToward");
const WithinBoundary = require("util.WithinBoundary");

function Guard(creep, target) 
{
    creep.memory.task = "Guarding";

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
    
    //Stay near target
    const min_x = target.pos.x - 5;
    const max_x = target.pos.x + 5;
    const min_y = target.pos.y - 5;
    const max_y = target.pos.y + 5;
    
    if (WithinBoundary(position.X, position.Y, min_x, max_x, min_y, max_y))
    {
        GoTo(creep, position, creep.room.name, creep.memory.task);
    }
    else
    {
        GoToward(creep, target);
    }
}

module.exports = Guard;