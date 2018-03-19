var Vector = require('Vector');

var GoTo = require('task.GoTo');
var Pave = require('task.Pave');

function Upgrade(creep, structure) 
{
    creep.memory.task = "Upgrading";
    creep.memory.target = structure.id;
    
    var total = structure.progressTotal - structure.progress - 1;
    
    if (creep.upgradeController(structure) != ERR_NOT_IN_RANGE) 
    {
        creep.say("ToGo:" + total, false);
    }
    else
    {
        var location = new Vector(structure.pos.x, structure.pos.y);
        Pave(creep);
        GoTo(creep, location);
    }
}

module.exports = Upgrade;