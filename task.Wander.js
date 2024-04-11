const Position = require("object.Position");
const GoTo = require("task.GoTo");

function Wander(creep) 
{
    creep.memory.task = "Patrolling";
    
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
    
    if (position.X != 0 &&
        position.X != 49 &&
        position.Y != 0 &&
        position.Y != 49)
    {
        GoTo(creep, position, creep.room.name, creep.memory.task);
    }
}

module.exports = Wander;