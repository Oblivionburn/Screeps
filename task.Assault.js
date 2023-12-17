const Position = require("object.Position");
const GoTo = require("task.GoTo");

function Assault(creep, thing, debug) 
{
    creep.memory.task = "Attacking";
    creep.memory.target = thing.id;
    
    var position = new Position(thing.pos.x, thing.pos.y);
    GoTo(creep, position, creep.memory.task);
}

module.exports = Assault;