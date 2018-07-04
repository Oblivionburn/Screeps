var Harvester = require('role.Harvester');
var Builder = require('role.Builder');
var Upgrader = require('role.Upgrader');
var Fixer = require('role.Fixer');
var Soldier = require('role.Soldier');

function HandleCreeps(debug) 
{
    var elder = null;
    
    if (debug)
    {
        for (var name in Game.creeps)
        {
            elder = Game.creeps[name];
            break;
        }
    }
    
    for (var name in Game.creeps)
    {
        var creep = Game.creeps[name];
        
        if (creep.memory.role == 'Harvester') 
        {
            Harvester(creep, debug);
        }
        else if (creep.memory.role == 'Builder') 
        {
            Builder(creep, debug);
        }
        else if (creep.memory.role == 'Upgrader') 
        {
            Upgrader(creep, debug);
        }
        else if (creep.memory.role == 'Fixer') 
        {
            Fixer(creep, debug);
        }
        else if (creep.memory.role == 'Soldier') 
        {
            Soldier(creep, debug);
        }
        
        if (debug)
        {
            if (creep.ticksToLive < elder.ticksToLive)
            {
                elder = creep;
            }
        }
    }
    
    return elder;
}

module.exports = HandleCreeps;
