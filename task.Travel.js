var Vector = require('Vector');

function Travel(creep, x, y) 
{
    creep.memory.task = "Travelling";
    
    var location = new Vector(creep.pos.x, creep.pos.y);
    var destination = new Vector(x, y);
    
    if (location.X < destination.X)
    {
        if (location.Y < destination.Y)
        {
            //SouthEast
            creep.move(BOTTOM_RIGHT);
        }
        else if (location.Y > destination.Y)
        {
            //NorthEast
            creep.move(TOP_RIGHT);
        }
        else if (location.Y == destination.Y)
        {
            //East
            creep.move(RIGHT);
        }
    }
    else if (location.X > destination.X)
    {
        if (location.Y < destination.Y)
        {
            //SouthWest
            creep.move(BOTTOM_LEFT);
        }
        else if (location.Y > destination.Y)
        {
            //NorthWest
            creep.move(TOP_LEFT);
        }
        else if (location.Y == destination.Y)
        {
            //West
            creep.move(LEFT);
        }
    }
    else if (location.X == destination.X)
    {
        if (location.Y < destination.Y)
        {
            //South
            creep.move(BOTTOM);
        }
        else if (location.Y > destination.Y)
        {
            //North
            creep.move(TOP);
        }
        else if (location.Y == destination.Y)
        {
            //At Destination
        }
    }
}

module.exports = Travel;