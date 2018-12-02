var CleanMemory = require('util.CleanMemory');
var GetName = require('util.GetName');
var GetSpawnCost = require('util.GetSpawnCost');
var GetError = require('util.GetError');

function Spawn(spawn, role, debug) 
{
    var queue = "";
    
    var template = [];
    var body = [];
    var cost = 0;
    var result = 0;
    
    if (role == "Harvester")
    {
        template = [WORK, CARRY, MOVE, MOVE];
    }
    else if (role == "Builder")
    {
        template = [WORK, WORK, CARRY, MOVE];
    }
    else if (role == "Upgrader")
    {
        template = [WORK, CARRY, MOVE, ATTACK];
    }
    else if (role == "Fixer")
    {
        template = [WORK, CARRY, MOVE, ATTACK];
    }
    else if (role == "Soldier")
    {
        template = [ATTACK, MOVE, ATTACK];
    }
    else if (role == "Claimer")
    {
        template = [CLAIM, MOVE];
    }
    
    var available = Math.floor(spawn.room.energyAvailable / GetSpawnCost(template));
    for (i = 0; i < available; i++)
    {
        for (t = 0; t < template.length; t++)
        {
            body.push(template[t]);
        }
    }
    
    if (body.length > 0)
    {
        cost = GetSpawnCost(body);
        
        if (cost <= spawn.room.energyAvailable &&
            spawn.spawning == null)
        {
            CleanMemory();
            result = spawn.spawnCreep(body, GetName(role), 
            {
                memory: 
                {
                    role: role, 
                    home: spawn.room.name
                }
            });
        }
        
        if (result < 0)
        {
            console.log("Error for " + spawn.name + ": " + GetError(result));
        }
        else if (debug)
        {
            queue = spawn.name + " queue: " + role + " for " + cost + " energy.";
        }
    }
    
    return queue;
}

module.exports = Spawn;