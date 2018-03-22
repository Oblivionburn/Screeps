var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Grab(creep, target) 
{
    creep.memory.task = "Grabbing";
    creep.memory.target = target.id;
    
    var result = creep.pickup(target);
    if (result == 0) 
    {
        creep.say("Left: " + (target.amount - (GetBodyCount(creep, "work") * 2)), false);
    }
    else if (result == -9)
    {
        var location = new Vector(target.pos.x, target.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
    else
    {
        creep.say("Error: " + GetError(result));
    }
}
    
module.exports = Grab;