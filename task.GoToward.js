const Position = require("object.Position");
const GoTo = require("task.GoTo");

function GoToward(creep, target) 
{
    let position = new Position(creep.pos.x, creep.pos.y);
    
    if (creep.pos.x < target.pos.x)
    {
        //Go right
        position.X++;
        
        if (creep.pos.y < target.pos.y)
        {
            //Go down
            position.Y++;
        }
        else if (creep.pos.y > target.pos.y)
        {
            //Go up
            position.Y--;
        }
    }
    else if (creep.pos.x > target.pos.x)
    {
        //Go left
        position.X--;
        
        if (creep.pos.y < target.pos.y)
        {
            //Go down
            position.Y++;
        }
        else if (creep.pos.y > target.pos.y)
        {
            //Go up
            position.Y--;
        }
    }
    else
    {
        if (creep.pos.y < target.pos.y)
        {
            //Go down
            position.Y++;
        }
        else if (creep.pos.y > target.pos.y)
        {
            //Go up
            position.Y--;
        }
    }
    
    GoTo(creep, position, creep.room.name, creep.memory.task);
}

module.exports = GoToward;