const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const BuildStructure = require("util.BuildStructure");
const GetSpawnPosition = require("util.GetSpawnPosition");

function HandleBuilding()
{
    for (let roomName in Game.rooms)
    {
        const room = Game.rooms[roomName];
        
        const spawns = GetStructures(room, "spawn");
        if (spawns.length > 0)
        {
            const spawn = spawns[0];
            
            let totalExtensions = 0;
            let totalTowers = 0;
            
            let buildExtension = false;
            let buildTower = false;
            
            const extensions = GetStructures(spawn.room, "extension");
            if (extensions != null)
            {
                totalExtensions = extensions.length;
            }
            
            const towers = GetStructures(spawn.room, "tower");
            if (towers != null)
            {
                totalTowers = towers.length;
            }
            
            const sites = GetStructures(spawn.room, "site");
            if (sites != null)
            {
                const siteCount = sites.length;
                for (let i = 0; i < siteCount; i++)
                {
                    const site = sites[i];
                    
                    if (site.structureType == STRUCTURE_EXTENSION)
                    {
                        totalExtensions++;
                    }
                    else if (site.structureType == STRUCTURE_TOWER)
                    {
                        totalTowers++;
                    }
                }
            }
            
            if (spawn.room.controller.level == 2)
            {
                if (totalExtensions < 5)
                {
                    buildExtension = true;
                }
            }
            else if (spawn.room.controller.level == 3)
            {
                if (totalExtensions < 10)
                {
                    buildExtension = true;
                }
                else if (totalTowers < 1)
                {
                    buildTower = true;
                }
            }
            else if (spawn.room.controller.level == 4)
            {
                if (totalExtensions < 20)
                {
                    buildExtension = true;
                }
                else if (totalTowers < 1)
                {
                    buildTower = true;
                }
            }
            else if (spawn.room.controller.level == 5)
            {
                if (totalExtensions < 30)
                {
                    buildExtension = true;
                }
                else if (totalTowers < 2)
                {
                    buildTower = true;
                }
            }
            else if (spawn.room.controller.level == 6)
            {
                if (totalExtensions < 40)
                {
                    buildExtension = true;
                }
                else if (totalTowers < 2)
                {
                    buildTower = true;
                }
            }
            else if (spawn.room.controller.level == 7)
            {
                if (totalExtensions < 50)
                {
                    buildExtension = true;
                }
                else if (totalTowers < 3)
                {
                    buildTower = true;
                }
            }
            else if (spawn.room.controller.level == 8)
            {
                if (totalExtensions < 60)
                {
                    buildExtension = true;
                }
                else if (totalTowers < 6)
                {
                    buildTower = true;
                }
            }
            
            if (buildExtension)
            {
                BuildStructure(new Position(spawn.pos.x, spawn.pos.y), STRUCTURE_EXTENSION);
            }
            else if (buildTower)
            {
                BuildStructure(new Position(spawn.pos.x, spawn.pos.y), STRUCTURE_TOWER);
            }
        }
        else if (room.controller.my)
        {
            const position = GetSpawnPosition(room);
            BuildStructure(room, position, STRUCTURE_SPAWN);
        }
    }
}

module.exports = HandleBuilding;