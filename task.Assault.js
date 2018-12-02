var Vector = require('Vector');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Assault(creep, thing, debug) 
{
    creep.memory.task = "Attacking";
    creep.memory.target = thing.id;
    
    var location = new Vector(thing.pos.x, thing.pos.y);
    GoTo(creep, location, creep.memory.task, debug);
}

module.exports = Assault;