var GetCreeps = require('util.GetCreeps');
var GetName = require('util.GetName');
var GetSpawnCost = require('util.GetSpawnCost');
var GetError = require('util.GetError');

function Spawn(spawn, role) 
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
    
    if (cost <= spawn.energy &&
        spawn.spawning == null)
    {
        result = spawn.spawnCreep(body, GetName(role), {memory: {role: role}});
    }
    
    if (result != 0)
    {
        console.log("Error for " + spawn.name + ": " + GetError(result));
    }
    else
    {
        queue = "Spawn queue: " + role + " for " + cost + " energy.";
    }

    return queue;
}

module.exports = Spawn;