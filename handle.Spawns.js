const GetSourceHarvestPositions = require("util.GetSourceHarvestPositions");
const SpawnCreep = require("util.SpawnCreep");
const GetJobCounts = require("util.GetJobCounts");
const GetRoomToInvade = require("util.GetRoomToInvade");

function HandleSpawns() 
{
    const jobs = ["Harvester", "Upgrader", "Healer", "Soldier", "Builder", "Fixer", "Invader", "Claimer"];
    const spawnCount = Object.keys(Game.spawns).length;
    
    for (let spawnName in Game.spawns)
    {
        const spawn = Game.spawns[spawnName];
        
        new RoomVisual(spawn.room.name).text("Energy:" + spawn.room.energyAvailable, spawn.pos.x, spawn.pos.y - 1.5, {color: "yellow", font: "bold 0.7 Calibri"});
        
        const controllerLevel = spawn.room.controller.level;
        const scale = controllerLevel - 1;
        
        const fixerMax = controllerLevel > 3 ? 3 : controllerLevel;
        
        const harvestPositions = GetSourceHarvestPositions(spawn.room);
        const harvestPositionCount = harvestPositions.length;

        const jobCounts = GetJobCounts(spawn.room, jobs);

        if (jobCounts["Harvester"] < controllerLevel + 1 &&
            jobCounts["Harvester"] < harvestPositionCount)
        {
            SpawnCreep(spawn, "Harvester", scale); 
        }
        else if (jobCounts["Upgrader"] < controllerLevel + 1)
        {
            SpawnCreep(spawn, "Upgrader", scale);
        }
        //else if (jobCounts["Healer"] < controllerLevel - 1)
        //{
        //    SpawnCreep(spawn, "Healer");
        //}
        else if (jobCounts["Soldier"] < controllerLevel - 1)
        {
            SpawnCreep(spawn, "Soldier", scale);
        }
        else if (jobCounts["Builder"] < 1)
        {
            SpawnCreep(spawn, "Builder", scale);
        }
        else if (jobCounts["Fixer"] < fixerMax)
        {
            SpawnCreep(spawn, "Fixer", scale);
        }
        else if (spawnCount < Game.gcl.level)
        {
            const room = GetRoomToInvade(spawn.room);
            if (room != null)
            {
                //Will continually spawn as creeps go to other room
                if (jobCounts["Claimer"] < 1)
                {
                    SpawnCreep(spawn, "Claimer", scale);
                }
                else if (jobCounts["Invader"] < 1)
                {
                    SpawnCreep(spawn, "Invader", scale);
                }
            }
        }
    }
}

module.exports = HandleSpawns;