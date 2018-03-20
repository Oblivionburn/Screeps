var Vector = require('Vector');

var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Upgrade(creep, structure) 
{
    creep.memory.task = "Upgrading";
    creep.memory.target = structure.id;
    
    var total = structure.progressTotal - structure.progress - 1;
    
    var result = creep.upgradeController(structure);
    if (result == 0) 
    {
        creep.say(total, false);
    }
    else if (result == -9)
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        GoTo(creep, location, creep.memory.task);
    }
}

module.exports = Upgrade;