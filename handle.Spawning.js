var Vector = require('Vector');
var CleanMemory = require('util.CleanMemory');
var GetCreeps = require('util.GetCreeps');
var Spawn = require('util.Spawn');

function HandleSpawning() 
{
    for (var name in Game.spawns)
    {
        var spawn = Game.spawns[name];
        
        var harvesters = GetCreeps(spawn.room, "Harvester");
        var builders = GetCreeps(spawn.room, "Builder");
        var upgraders = GetCreeps(spawn.room, "Upgrader");
        
        if (harvesters.length < spawn.room.controller.level)
        {
            CleanMemory();
            Spawn(spawn, "Harvester");
        }
        else if (builders.length < spawn.room.controller.level)
        {
            CleanMemory();
            Spawn(spawn, "Builder");
        }
        else if (upgraders.length < spawn.room.controller.level)
        {
            CleanMemory();
            Spawn(spawn, "Upgrader");
        }
        
        if (spawn.room.controller.level == 2)
        {
            var sites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_EXTENSION);
                }
            });
            
            if (sites.length < 5)
            {
                var location = new Vector(spawn.pos.x, spawn.pos.y);
                spawn.room.createConstructionSite(location.X - 1, location.Y - 1, STRUCTURE_EXTENSION)
                spawn.room.createConstructionSite(location.X, location.Y + 1, STRUCTURE_EXTENSION)
                spawn.room.createConstructionSite(location.X + 1, location.Y - 1, STRUCTURE_EXTENSION)
                spawn.room.createConstructionSite(location.X - 1, location.Y, STRUCTURE_EXTENSION)
                spawn.room.createConstructionSite(location.X + 1, location.Y, STRUCTURE_EXTENSION)
            }
        }
        else if (spawn.room.controller.level == 3)
        {
            
        }
        
        if(spawn.spawning) 
        {
            var spawningCreep = Game.creeps[spawn.spawning.name];
        }
    }
}

module.exports = HandleSpawning;