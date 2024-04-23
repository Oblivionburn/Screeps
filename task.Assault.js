const Position = require("object.Position");
const GoTo = require("task.GoTo");

function Assault(creep, thing) 
{
    creep.memory.task = "Attacking";
    creep.memory.target = thing.id;
    
    const position = new Position(thing.pos.x, thing.pos.y);
    GoTo(creep, position, creep.room.name, creep.memory.task);
}

module.exports = Assault;