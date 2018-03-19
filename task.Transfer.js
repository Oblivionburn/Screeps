var Vector = require('Vector');
var GoTo = require('task.GoTo');

function Transfer(creep, structure) 
{
    creep.memory.task = "Transfering";
    creep.memory.target = structure.id;
    
    var before = creep.carry.energy;
    
    if (creep.transfer(structure, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) 
    {
        creep.say("Give:" + before, false);
    }
    else
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location);
    }
}

module.exports = Transfer;