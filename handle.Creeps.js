var Harvester = require('role.Harvester');
var Builder = require('role.Builder');
var Upgrader = require('role.Upgrader');
var Fixer = require('role.Fixer');

function HandleCreeps() 
{
    var elder = null;
    for (var name in Game.creeps)
    {
        elder = Game.creeps[name];
        break;
    }

    for (var name in Game.creeps) 
    {
        var creep = Game.creeps[name];
        
        if (creep.memory.role == 'Harvester') 
        {
            Harvester(creep);
        }
        else if (creep.memory.role == 'Builder') 
        {
            Builder(creep);
        }
        else if (creep.memory.role == 'Upgrader') 
        {
            Upgrader(creep);
        }
        else if (creep.memory.role == 'Fixer') 
        {
            Fixer(creep);
        }
        
        if (creep.ticksToLive < elder.ticksToLive)
        {
            elder = creep;
        }
    }
    
    if (elder != null)
    {
        return elder;
    }
}

module.exports = HandleCreeps;
