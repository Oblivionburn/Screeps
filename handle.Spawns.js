const GetSourceHarvestPositions = require("util.GetSourceHarvestPositions");
const SpawnCreep = require("util.SpawnCreep");
const GetJobCounts = require("util.GetJobCounts");
const GetRoomToInvade = require("util.GetRoomToInvade");

function HandleSpawns() 
{
    for (let spawnName in Game.spawns)
    {
        const spawn = Game.spawns[spawnName];
        
        new RoomVisual(spawn.room.name).text("Energy:" + spawn.room.energyAvailable, spawn.pos.x, spawn.pos.y - 1.5, {color: "yellow", font: "bold 0.7 Calibri"});
        
        const harvestPositions = GetSourceHarvestPositions(spawn.room);
        const harvestPositionCount = harvestPositions.length;
        
        const jobs = ["Harvester", "Upgrader", "Healer", "Soldier", "Builder", "Fixer", "Invader", "Claimer"];
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
        //else if (jobCounts["Healer"] < spawn.room.controller.level - 1)
        //{
        //    SpawnCreep(spawn, "Healer");
        //}
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
        
        if (Game.spawns.length < Game.gcl.level)
        {
            const room = GetRoomToInvade(spawn.room);
            if (room != null)
            {
                //Will continually spawn as creeps go to other room
                if (jobCounts["Invader"] < 1)
                {
                    SpawnCreep(spawn, "Invader");
                }
                else if (jobCounts["Claimer"] < 1)
                {
                    SpawnCreep(spawn, "Claimer");
                }
            }
        }
    }
}

module.exports = HandleSpawns;