var Vector = require('Vector');
var GetWork = require('util.GetWork');
var GoTo = require('task.GoTo');

function Grab(creep, target) 
{
    creep.memory.task = "Grabbing";
    creep.memory.target = target.id;
    
    if(creep.pickup(target) != ERR_NOT_IN_RANGE) 
    {
        creep.say("Left: " + (target.amount - (GetWork(creep) * 2)), false);
    }
    else
    {
        var location = new Vector(target.pos.x, target.pos.y);
        GoTo(creep, location);
    }
}
    
module.exports = Grab;