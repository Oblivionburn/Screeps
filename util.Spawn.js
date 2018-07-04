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
        body = [ATTACK, WORK, CARRY, MOVE];
        cost = GetSpawnCost(body);
    }
    else if (role == "Fixer")
    {
        body = [ATTACK, WORK, CARRY, MOVE];
        cost = GetSpawnCost(body);
    }
    else if (role == "Soldier")
    {
        body = [ATTACK, ATTACK, MOVE];
        cost = GetSpawnCost(body);
    }
    
    var energy_pool = 0;
    for (var structure in GetStructures(spawn.room, "Extension"))
    {
        energy_pool += structure.energy;
    }
    
    if (debug)
    {
        if (cost <= (spawn.energy + energy_pool) &&
            spawn.spawning == null)
        {
            CleanMemory();
            result = spawn.spawnCreep(body, GetName(role), {memory: {role: role}});
        }
    }
    else
    {
        if ((spawn.energy + energy_pool) >= cost &&
            spawn.spawning == null)
        {
            CleanMemory();
            result = spawn.spawnCreep(body, GetName(role), {memory: {role: role}});
        }
    }
    
    if (result != 0)
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