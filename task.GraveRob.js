var Vector = require('Vector');
var GetWork = require('util.GetWork');
var GoTo = require('task.GoTo');

function GraveRob(creep, target) 
{
    creep.memory.task = "Grabbing";
    creep.memory.target = target.id;

    if(creep.withdraw(resource) != ERR_NOT_IN_RANGE) 
    {
        creep.say("Left:" + (resource.amount - (GetWork(creep) * 2)), false);
    }
    else
    {
        var location = new Vector(target.pos.x, target.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}
    
module.exports = GraveRob;