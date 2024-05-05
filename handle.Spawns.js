const GetSourceHarvestPositions = require("util.GetSourceHarvestPositions");
const SpawnCreep = require("util.SpawnCreep");
const GetJobCounts = require("util.GetJobCounts");
const GetRoomToInvade = require("util.GetRoomToInvade");
const GetStructures = require("util.GetStructures");
const GetConstructionSites = require("util.GetConstructionSites");

function HandleSpawns() 
{
    const jobs = ["Harvester", "Upgrader", "Healer", "Soldier", "Builder", "Fixer", "Invader", "Claimer"];
    const spawnCount = Object.keys(Game.spawns).length;
    
    for (let spawnName in Game.spawns)
    {
        const spawn = Game.spawns[spawnName];
        const room = spawn.room;
        
        new RoomVisual(room.name).text("Energy:" + room.energyAvailable, spawn.pos.x, spawn.pos.y - 1.5, {color: "yellow", font: "bold 0.7 Calibri"});
        
        const controller = room.controller;
        const controllerLevel = controller.level;
        const scale = controllerLevel;
        
        const harvestPositions = GetSourceHarvestPositions(room);
        const harvestPositionCount = harvestPositions.length;
        
        const harvesterMax = harvestPositionCount - 1;
        const upgraderMax = Math.floor(harvestPositionCount / 2);
        const soldierMax = controllerLevel > 2 ? 2 : controllerLevel;
        const builderMax = 1;
        const fixerMax = controllerLevel > 3 ? 3 : controllerLevel;
        const claimerMax = 1;
        const invaderMax = 1;

        const jobCounts = GetJobCounts(room, jobs);

        if (jobCounts["Harvester"] < harvesterMax)
        {
            SpawnCreep(spawn, "Harvester", scale); 
        }
        else if (jobCounts["Upgrader"] < upgraderMax)
        {
            SpawnCreep(spawn, "Upgrader", scale);
        }
        //else if (jobCounts["Healer"] < controllerLevel - 1)
        //{
        //    SpawnCreep(spawn, "Healer");
        //}
        else if (jobCounts["Soldier"] < soldierMax)
        {
            SpawnCreep(spawn, "Soldier", scale);
        }
        else if (jobCounts["Builder"] < builderMax)
        {
            SpawnCreep(spawn, "Builder", scale);
        }
        else if (jobCounts["Fixer"] < fixerMax)
        {
            SpawnCreep(spawn, "Fixer", scale);
        }
        else if (spawnCount < Game.gcl.level)
        {
            const roomToInvade = GetRoomToInvade(room);
            if (roomToInvade != null)
            {
                let otherRoom = null;
                for (let visibleRoomName in Game.rooms)
                {
                    const visibleRoom = Game.rooms[visibleRoomName];
                    if (visibleRoom.name == roomToInvade)
                    {
                        otherRoom = visibleRoom;
                        break;
                    }
                }
                
                if (jobCounts["Claimer"] < claimerMax &&
                    GetStructures(otherRoom, "spawn").length == 0 &&
                    GetConstructionSites(otherRoom, STRUCTURE_SPAWN).length == 0)
                {
                    SpawnCreep(spawn, "Claimer", scale);
                }
                else if (jobCounts["Invader"] < invaderMax &&
                         GetStructures(otherRoom, "spawn").length == 0 &&
                         GetConstructionSites(otherRoom, STRUCTURE_SPAWN).length > 0)
                {
                    SpawnCreep(spawn, "Invader", scale);
                }
            }
        }
    }
}

module.exports = HandleSpawns;