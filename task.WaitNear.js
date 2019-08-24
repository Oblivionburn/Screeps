var Vector = require('Vector');
var NextTo = require('util.NextTo');
var GoTo = require('task.GoTo');

function WaitNear(creep, thing, debug) 
{
    creep.memory.task = "Waiting";
    creep.memory.target = thing.id;

    var location = new Vector(creep.pos.x, creep.pos.y);
    var target = new Vector(thing.pos.x, thing.pos.y);
    if (!NextTo(location, target))
    {
        GoTo(creep, target, "Waiting", debug);
    }
}

module.exports = WaitNear;