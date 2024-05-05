const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const BuildStructure = require("util.BuildStructure");
const GetSpawnPosition = require("util.GetSpawnPosition");
const GetConstructionSites = require("util.GetConstructionSites");
const GetJobCounts = require("util.GetJobCounts");

function HandleBuilding()
{
    Memory.Invaders = 0;
    const RoomJobCounts = {};
    const jobs = ["Harvester", "Upgrader", "Healer", "Soldier", "Builder", "Fixer", "Invader", "Claimer"];
    const structureTypes = ["container", "storage", "extension", "tower"];
    
    for (let roomName in Game.rooms)
    {
        const room = Game.rooms[roomName];
        
        const jobCounts = GetJobCounts(room, jobs);

        RoomJobCounts[roomName] = jobCounts;
        
        Memory.Invaders += jobCounts["Invader"];
        
        const spawns = GetStructures(room, "spawn");
        if (spawns.length > 0)
        {
            const spawn = spawns[0];
            
            let buildStructures = {};
            
            switch (room.controller.level)
            {
                case 1:
                    buildStructures["container"] = 1;
                    break;
                    
                case 2:
                    buildStructures["container"] = 1;
                    buildStructures["extension"] = 5;
                    break;
                    
                case 3:
                    buildStructures["container"] = 1;
                    buildStructures["extension"] = 10;
                    buildStructures["tower"] = 1;
                    break;
                    
                case 4:
                    buildStructures["container"] = 1;
                    buildStructures["extension"] = 20;
                    buildStructures["tower"] = 1;
                    break;
                    
                case 5:
                    buildStructures["storage"] = 1;
                    buildStructures["extension"] = 30;
                    buildStructures["tower"] = 2;
                    break;
                    
                case 6:
                    buildStructures["storage"] = 1;
                    buildStructures["extension"] = 40;
                    buildStructures["tower"] = 2;
                    break;
                    
                case 7:
                    buildStructures["storage"] = 1;
                    buildStructures["extension"] = 50;
                    buildStructures["tower"] = 3;
                    break;
                    
                case 8:
                    buildStructures["storage"] = 1;
                    buildStructures["extension"] = 60;
                    buildStructures["tower"] = 6;
                    break;
            }
            
            for (let i = 0; i < structureTypes.length; i++)
            {
                let type = structureTypes[i];
                
                if (buildStructures.hasOwnProperty(type))
                {
                    let total = 0;
                    
                    let structures = GetStructures(room, type);
                    if (structures != null)
                    {
                        total = structures.length;
                    }
                    
                    let sites = GetConstructionSites(room, type);
                    if (sites != null)
                    {
                        total += sites.length;
                    }
                    
                    if (total < buildStructures[type])
                    {
                        let position = new Position(spawn.pos.x, spawn.pos.y);
                        
                        switch (type)
                        {
                            case "container":
                                BuildStructure(room, position, STRUCTURE_CONTAINER);
                                break;
                                
                            case "storage":
                                BuildStructure(room, position, STRUCTURE_STORAGE);
                                break;
                            
                            case "extension":
                                BuildStructure(room, position, STRUCTURE_EXTENSION);
                                break;
                                
                            case "tower":
                                BuildStructure(room, position, STRUCTURE_TOWER);
                                break;
                        }
                        
                        break;
                    }
                }
            }
        }
        else if (room.controller &&
                 room.controller.my)
        {
            let spawnSites = GetConstructionSites(room, STRUCTURE_SPAWN);
            if (spawnSites.length == 0)
            {
                const spawnPosition = GetSpawnPosition(room);
                if (spawnPosition != null)
                {
                    spawnPosition.Y++;
                    BuildStructure(room, spawnPosition, STRUCTURE_SPAWN);
                }
            }
        }
    }
    
    Memory.JobCounts = RoomJobCounts;
}

module.exports = HandleBuilding;