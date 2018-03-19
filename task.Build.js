var Vector = require('Vector');
var GetWork = require('util.GetWork');
var GoTo = require('task.GoTo');

function Build(creep, structure) 
{
    creep.memory.task = "Building";
    creep.memory.target = structure.id;
    
    var total = structure.progressTotal - structure.progress - (GetWork(creep) * 5);
    
    var result = creep.build(structure);
    if (result == 0) 
    {
        creep.say("Build:" + total, false);
    }
    else
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location);
    }
}

module.exports = Build;