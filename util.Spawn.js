var CleanMemory = require('util.CleanMemory');
var GetCreeps = require('util.GetCreeps');
var GetName = require('util.GetName');
var GetSpawnCost = require('util.GetSpawnCost');
var GetError = require('util.GetError');
var GetStructures = require('util.GetStructures');

function Spawn(spawn, role, debug) 
{
    var queue = "";
    
    var body = [];
    var cost = 0;
    var result = 0;
    
    if (role == "Harvester")
    {
        body = [WORK, CARRY, MOVE, MOVE];
        cost = GetSpawnCost(body);
    }
    else if (role == "Builder")
    {
        body = [WORK, WORK, CARRY, MOVE];
        cost = GetSpawnCost(body);
    }
    else if (role == "Upgrader")
    {
        body = [WORK, CARRY, MOVE, ATTACK];
        cost = GetSpawnCost(body);
    }
    else if (role == "Fixer")
    {
        body = [WORK, CARRY, MOVE, ATTACK];
        cost = GetSpawnCost(body);
    }
    else if (role == "Soldier")
    {
        body = [ATTACK, MOVE, ATTACK];
        cost = GetSpawnCost(body);
    }
    else if (role == "Claimer")
    {
        body = [CLAIM, MOVE];
        cost = GetSpawnCost(body);
    }
    
    var energy_pool = spawn.energy;
    var extensions = GetStructures(spawn.room, "Extension");
    if (extensions != null)
    {
        for (e = 0; e < extensions.length; e++)
        {
            energy_pool += extensions[e].energy;
        }
    }
    
    if (cost <= energy_pool &&
        spawn.spawning == null)
    {
        CleanMemory();
        result = spawn.spawnCreep(body, GetName(role), {memory: {role: role}});
    }
    
    if (result < 0)
    {
        console.log("Error for " + spawn.name + ": " + GetError(result));
    }
    else if (debug)
    {
        queue = spawn.name + " queue: " + role + " for " + cost + " energy.";
    }

    return queue;
}

module.exports = Spawn;