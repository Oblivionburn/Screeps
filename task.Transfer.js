var Vector = require('Vector');
var GoTo = require('task.GoTo');

function Transfer(creep, structure) 
{
    creep.memory.task = "Transfering";
    creep.memory.target = structure.id;
    
    var before = creep.carry.energy;
    
    var result = creep.transfer(structure, RESOURCE_ENERGY);
    if (result == 0) 
    {
        creep.say("Give:" + before, false);
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}

module.exports = Transfer;