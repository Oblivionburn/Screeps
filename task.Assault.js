var Vector = require('Vector');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Assault(creep, structure, debug) 
{
    creep.memory.task = "Attacking";
    creep.memory.target = structure.id;
    
    var location = new Vector(structure.pos.x, structure.pos.y);
    GoTo(creep, location, creep.memory.task, debug);
}

module.exports = Assault;