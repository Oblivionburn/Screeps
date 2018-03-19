var Harvester = require('role.Harvester');
var Builder = require('role.Builder');
var Upgrader = require('role.Upgrader');

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
        
        if (creep.ticksToLive < elder.ticksToLive)
        {
            elder = creep;
        }
    }
    
    if (elder != null)
    {
        if (elder.ticksToLive <= 10)
        {
            Game.notify(elder.name + " will die in: " + elder.ticksToLive + " ticks.");
        }
        
        console.log(elder.name + " will die in: " + elder.ticksToLive + " ticks.");
    }
}

module.exports = HandleCreeps;