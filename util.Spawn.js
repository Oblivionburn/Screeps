var CleanMemory = require('util.CleanMemory');
var GetName = require('util.GetName');
var GetSpawnCost = require('util.GetSpawnCost');
var GetError = require('util.GetError');

function Spawn(spawn, role, debug) 
{
    var queue = "";
    
    var templates = [];
    var body = [];
    var cost = 0;
    var result = 0;
    
    if (spawn.spawning == null)
    {
        if (role == "Harvester")
        {
            templates = [WORK, CARRY, MOVE, MOVE]; //250
        }
        else if (role == "Builder")
        {
            templates = [WORK, WORK, CARRY, MOVE]; //300
        }
        else if (role == "Upgrader" ||
                 role == "Fixer")
        {
            templates = [ATTACK, WORK, CARRY, MOVE]; //280
        }
        else if (role == "Soldier")
        {
            templates = [ATTACK, MOVE, MOVE, MOVE, TOUGH, TOUGH]; //250
        }
        else if (role == "Claimer")
        {
            templates = [CLAIM, MOVE]; //650
        }
        
        var available = Math.floor(spawn.room.energyAvailable / GetSpawnCost(templates));
        var count = templates.length;
        for (t = 0; t < count; t++)
        {
            var template = templates[t];
            for (let i = 0; i < available; i++)
            {
                body.push(template);
            }
        }
        
        if (body.length > 0)
        {
            cost = GetSpawnCost(body);
            
            if (cost <= spawn.room.energyAvailable)
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
                queue = spawn.name + " spawning: " + role + " for " + cost + " energy.";
            }
        }
    }
    
    return queue;
}

module.exports = Spawn;