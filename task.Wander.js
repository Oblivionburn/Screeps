var Vector = require('Vector');
var GoTo = require('task.GoTo');

function Wander(creep, debug) 
{
    creep.memory.task = "Patrolling";
    
    var choice = Math.floor(Math.random() * 8);
    choice++;
    
    var location = null;
    if (choice == TOP)
    {
        location = new Vector(creep.pos.x, creep.pos.y - 1);
    }
    else if (choice == TOP_RIGHT)
    {
        location = new Vector(creep.pos.x + 1, creep.pos.y - 1);
    }
    else if (choice == RIGHT)
    {
        location = new Vector(creep.pos.x + 1, creep.pos.y);
    }
    else if (choice == BOTTOM_RIGHT)
    {
        location = new Vector(creep.pos.x + 1, creep.pos.y + 1);
    }
    else if (choice == BOTTOM)
    {
        location = new Vector(creep.pos.x, creep.pos.y + 1);
    }
    else if (choice == BOTTOM_LEFT)
    {
        location = new Vector(creep.pos.x - 1, creep.pos.y + 1);
    }
    else if (choice == LEFT)
    {
        location = new Vector(creep.pos.x - 1, creep.pos.y);
    }
    else if (choice == TOP_LEFT)
    {
        location = new Vector(creep.pos.x - 1, creep.pos.y - 1);
    }
    
    if (location.X != 0 &&
        location.X != 49 &&
        location.Y != 0 &&
        location.Y != 49)
    {
        GoTo(creep, location, creep.memory.task, debug);
    }
}

module.exports = Wander;