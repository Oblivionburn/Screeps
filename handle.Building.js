const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const BuildStructure = require("util.BuildStructure");
const GetSpawnPosition = require("util.GetSpawnPosition");
const GetConstructionSites = require("util.GetConstructionSites");

function HandleBuilding()
{
    const structureTypes = ["container", "storage", "extension", "tower"];
    
    for (let roomName in Game.rooms)
    {
        const room = Game.rooms[roomName];
        
        const spawns = GetStructures(room, "spawn");
        if (spawns.length > 0)
        {
            const spawn = spawns[0];
            
            let buildStructures = {};
            
            switch (spawn.room.controller.level)
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
        else if (room.controller.my)
        {
            //There's no spawn, but we've captured the controller
            //So build a new Spawn!
            
            let position = GetSpawnPosition(room);
            if (position != null)
            {
                position.Y++;
                BuildStructure(room, position, STRUCTURE_SPAWN);
            }
        }
    }
}

module.exports = HandleBuilding;