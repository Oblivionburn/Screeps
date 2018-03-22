var CleanMemory = require('util.CleanMemory');
var GetCreeps = require('util.GetCreeps');
var Spawn = require('util.Spawn');

function HandleSpawning() 
{
    var queue = "";
    
    for (var name in Game.spawns)
    {
        var spawn = Game.spawns[name];
        
        var harvesters = GetCreeps(spawn.room, "Harvester");
        var builders = GetCreeps(spawn.room, "Builder");
        var upgraders = GetCreeps(spawn.room, "Upgrader");
        var fixers = GetCreeps(spawn.room, "Fixer");

        if (spawn.room.controller.level == 1)
        {
            if (harvesters.length < 2)
            {
                CleanMemory();
                queue = Spawn(spawn, "Harvester");
            }
            else if (builders.length < 1)
            {
                CleanMemory();
                queue = Spawn(spawn, "Builder");
            }
            else if (upgraders.length < 1)
            {
                CleanMemory();
                queue = Spawn(spawn, "Upgrader");
            }
        }
        else if (spawn.room.controller.level == 2)
        {
            if (harvesters.length < 3)
            {
                CleanMemory();
                queue = Spawn(spawn, "Harvester");
            }
            else if (builders.length < 1)
            {
                CleanMemory();
                queue = Spawn(spawn, "Builder");
            }
            else if (upgraders.length < 2)
            {
                CleanMemory();
                queue = Spawn(spawn, "Upgrader");
            }
            else if (fixers.length < 2)
            {
                CleanMemory();
                queue = Spawn(spawn, "Fixer");
            }
        }
        else if (spawn.room.controller.level == 3)
        {
            if (harvesters.length < 4)
            {
                CleanMemory();
                queue = Spawn(spawn, "Harvester");
            }
            else if (builders.length < 1)
            {
                CleanMemory();
                queue = Spawn(spawn, "Builder");
            }
            else if (upgraders.length < 3)
            {
                CleanMemory();
                queue = Spawn(spawn, "Upgrader");
            }
            else if (fixers.length < 2)
            {
                CleanMemory();
                queue = Spawn(spawn, "Fixer");
            }
        }
    }
    
    return queue;
}

module.exports = HandleSpawning;