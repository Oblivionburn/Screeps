var Vector = require('Vector');
var GetBodyCount = require('util.GetBodyCount');
var GetError = require('util.GetError');
var GoTo = require('task.GoTo');

function Build(creep, structure, debug) 
{
    creep.memory.task = "Building";
    creep.memory.target = structure.id;
    
    var work = GetBodyCount(creep, "work") * 5;
    var total = structure.progressTotal - structure.progress - work;
    if (total < 0)
    {
        total = 0;    
    }
    
    var result = creep.build(structure);
    if (result == 0) 
    {
        if (debug)
        {
            creep.say(total, true);
            return true;
        }
    }
    else if (result == ERR_NOT_IN_RANGE)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task, debug);
        return true;
    }
    else if (debug)
    {
        creep.say("Error: " + GetError(result), true);
    }

    return false;
}

module.exports = Build;