/*
    Used by:
        main
*/

const GetSourceHarvestPositions = require("util.GetSourceHarvestPositions");
const SpawnCreep = require("util.SpawnCreep");
const GetJobCounts = require("util.GetJobCounts");

function HandleSpawns() 
{
    for (let spawnName in Game.spawns)
    {
        const spawn = Game.spawns[spawnName];
        
        const harvestPositions = GetSourceHarvestPositions(spawn.room);
        const harvestPositionCount = harvestPositions.length;
        
        const jobs = ["Harvester", "Upgrader", "Soldier", "Builder", "Fixer"];
        const jobCounts = GetJobCounts(spawn.room, jobs);

        if (jobCounts["Harvester"] < spawn.room.controller.level + 1 &&
            jobCounts["Harvester"] < harvestPositionCount)
        {
            SpawnCreep(spawn, "Harvester"); 
        }
        else if (jobCounts["Upgrader"] < spawn.room.controller.level + 1)
        {
            SpawnCreep(spawn, "Upgrader");
        }
        else if (jobCounts["Soldier"] < spawn.room.controller.level - 1)
        {
            SpawnCreep(spawn, "Soldier");
        }
        else if (jobCounts["Builder"] < 1)
        {
            SpawnCreep(spawn, "Builder");
        }
        else if (jobCounts["Fixer"] < spawn.room.controller.level - 1)
        {
            SpawnCreep(spawn, "Fixer");
        }
    }
}

module.exports = HandleSpawns;