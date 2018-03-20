var Vector = require('Vector');
var GetWork = require('util.GetWork');
var GoTo = require('task.GoTo');

function Grab(creep, target) 
{
    creep.memory.task = "Grabbing";
    creep.memory.target = target.id;
    
    var result = creep.pickup(target);
    if (result == 0) 
    {
        creep.say("Left: " + (target.amount - (GetWork(creep) * 2)), false);
    }
    else if (result == -9)
    {
        var location = new Vector(target.pos.x, target.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}
    
module.exports = Grab;