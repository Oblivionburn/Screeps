var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Build(creep, structure) 
{
    creep.memory.task = "Building";
    creep.memory.target = structure.id;
    
    var total = structure.progressTotal - structure.progress - (GetBodyCount(creep, "work") * 5);
    
    var result = creep.build(structure);
    if (result == 0) 
    {
        creep.say(total, false);
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
    else
    {
        creep.say("Error: " + GetError(result));
    }
}

module.exports = Build;