const Position = require("object.Position");
const GoTo = require("task.GoTo");
const WithinBoundary = require("util.WithinBoundary");

function Guard(creep, target) 
{
    creep.memory.task = "Guarding";
    creep.memory.target = target.id;

    let choice = Math.floor(Math.random() * 8);
    choice++;
    
    let position = null;
    
    switch (choice)
    {
        case TOP:
            position = new Position(creep.pos.x, creep.pos.y - 1);
            break;
            
        case TOP_RIGHT:
            position = new Position(creep.pos.x + 1, creep.pos.y - 1);
            break;
            
        case RIGHT:
            position = new Position(creep.pos.x + 1, creep.pos.y);
            break;
            
        case BOTTOM_RIGHT:
            position = new Position(creep.pos.x + 1, creep.pos.y + 1);
            break;
            
        case BOTTOM:
            position = new Position(creep.pos.x, creep.pos.y + 1);
            break;
            
        case BOTTOM_LEFT:
            position = new Position(creep.pos.x - 1, creep.pos.y + 1);
            break;
            
        case LEFT:
            position = new Position(creep.pos.x - 1, creep.pos.y);
            break;
            
        case TOP_LEFT:
            position = new Position(creep.pos.x - 1, creep.pos.y - 1);
            break;
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
        GoTo(creep, new Position(target.pos.x, target.pos.y), creep.room.name, creep.memory.task);
    }
}

module.exports = Guard;