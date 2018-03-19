var GetCreeps = require('util.GetCreeps');

function Spawn(spawn, string) 
{
    var creeps = GetCreeps(spawn.room, "All");

    if (string == "Harvester")
    {
        var Name = 'Harvester' + creeps.length;
        var body = [WORK, CARRY, MOVE, MOVE];
        spawn.spawnCreep(body, Name, {memory: {role: 'Harvester'}});
    }
    else if (string == "Builder")
    {
        var Name = 'Builder' + creeps.length;
        var body = [WORK, WORK, CARRY, MOVE];
        spawn.spawnCreep(body, Name, {memory: {role: 'Builder'}});
    }
    else if (string == "Upgrader")
    {
        var Name = 'Upgrader' + creeps.length;
        var body = [ATTACK, WORK, CARRY, MOVE];
        spawn.spawnCreep(body, Name, {memory: {role: 'Upgrader'}});
    }
}

module.exports = Spawn;