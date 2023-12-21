/*
    Used by:
        main
*/

const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const BuildStructure = require("util.BuildStructure");

function HandleBuilding()
{
    for (let spawnName in Game.spawns)
    {
        const spawn = Game.spawns[spawnName];
        
        const allStructures = spawn.room.find(FIND_MY_STRUCTURES);
        
        let totalExtensions = 0;
        let buildExtension = false;
        
        let totalTowers = 0;
        let buildTower = false;
        
        let totalStorage = 0;
        let buildStorage = false;
        
        const extensions = GetStructures(allStructures, "extension");
        if (extensions != null)
        {
            totalExtensions = extensions.length;
        }
        
        const towers = GetStructures(allStructures, "tower");
        if (towers != null)
        {
            totalTowers = towers.length;
        }
        
        const storage = GetStructures(allStructures, "storage");
        if (storage != null)
        {
            totalStorage = storage.length;
        }
        
        const sites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
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
                else if (site.structureType == STRUCTURE_STORAGE)
                {
                    totalStorage++;
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
            else if (totalStorage < 1)
            {
                buildStorage = true;
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
            else if (totalStorage < 1)
            {
                buildStorage = true;
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
            else if (totalStorage < 1)
            {
                buildStorage = true;
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
            else if (totalStorage < 1)
            {
                buildStorage = true;
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
            else if (totalStorage < 1)
            {
                buildStorage = true;
            }
        }
        
        if (buildExtension)
        {
            BuildStructure(spawn, STRUCTURE_EXTENSION);
        }
        else if (buildTower)
        {
            BuildStructure(spawn, STRUCTURE_TOWER);
        }
        else if (buildStorage)
        {
            BuildStructure(spawn, STRUCTURE_STORAGE);
        }
    }
}

module.exports = HandleBuilding;