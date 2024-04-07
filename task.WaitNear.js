const Position = require("object.Position");
const NextTo = require("util.NextTo");
const GoTo = require("task.GoTo");

function WaitNear(creep, thing) 
{
    creep.memory.target = thing.id;
    
    if (!NextTo(creep.pos.x, creep.pos.y, thing.pos.x, thing.pos.y))
    {
        const position = new Position(thing.pos.x, thing.pos.y);
        GoTo(creep, position, creep.room.name, "Waiting");
    }
}

module.exports = WaitNear;