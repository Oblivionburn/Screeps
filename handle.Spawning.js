var GetCreeps = require('util.GetCreeps');
var GetHarvestSpots_ForRoom = require('util.GetHarvestSpots_ForRoom');
var Spawn = require('util.Spawn');

function HandleSpawning(debug) 
{
    var queue = "";
    
    for (var name in Game.spawns)
    {
        var spawn = Game.spawns[name];
        
        var harvesters = GetCreeps(spawn.room, "Harvester");
        var builders = GetCreeps(spawn.room, "Builder");
        var upgraders = GetCreeps(spawn.room, "Upgrader");
        var fixers = GetCreeps(spawn.room, "Fixer");
        var soldiers = GetCreeps(spawn.room, "Soldier");
        var claimers = GetCreeps(spawn.room, "Claimer");

        var harvestSpots = GetHarvestSpots_ForRoom(spawn.room);
        
        if (spawn.room.controller.level == 1)
        {
            if (harvesters.length < 2 &&
                harvesters.length < harvestSpots.length)
            {
                queue = Spawn(spawn, "Harvester", debug);
            }
            else if (builders.length < 1)
            {
                queue = Spawn(spawn, "Builder", debug);
            }
            else if (upgraders.length < 1)
            {
                queue = Spawn(spawn, "Upgrader", debug);
            }
        }
        else if (spawn.room.controller.level == 2)
        {
            if (harvesters.length < 3 &&
                harvesters.length < harvestSpots.length)
            {
                queue = Spawn(spawn, "Harvester", debug);
            }
            else if (builders.length < 1)
            {
                queue = Spawn(spawn, "Builder", debug);
            }
            else if (upgraders.length < 1)
            {
                queue = Spawn(spawn, "Upgrader", debug);
            }
            else if (fixers.length < 1)
            {
                queue = Spawn(spawn, "Fixer", debug);
            }
        }
        else if (spawn.room.controller.level == 3)
        {
            if (harvesters.length < 4 &&
                harvesters.length < harvestSpots.length)
            {
                queue = Spawn(spawn, "Harvester", debug); 
            }
            else if (soldiers.length < 1)
            {
                queue = Spawn(spawn, "Soldier", debug);
            }
            else if (builders.length < 1)
            {
                queue = Spawn(spawn, "Builder", debug);
            }
            else if (upgraders.length < 1)
            {
                queue = Spawn(spawn, "Upgrader", debug);
            }
            else if (fixers.length < 1)
            {
                queue = Spawn(spawn, "Fixer", debug);
            }
        }
    }
    
    return queue;
}

module.exports = HandleSpawning;