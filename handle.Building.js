var Vector = require('Vector');
var GetStructures = require('util.GetStructures');
var BuildStructure = require('util.BuildStructure');

function HandleBuilding(debug)
{
    var built = "";
    
    for (var name in Game.spawns)
    {
        var spawn = Game.spawns[name];
        var controller = spawn.room.controller;
        var sites = GetStructures(spawn.room, "Site", false);
        var extensions = GetStructures(spawn.room, "Extension", false);
        var towers = GetStructures(spawn.room, "Tower", false);
        
        var totalExtensions = 0;
        var totalTowers = 0;
        
        var buildExtension = false;
        var buildTower = false;
        
        if (extensions != null)
        {
            totalExtensions = extensions.length;
        }
        
        if (towers != null)
        {
            totalTowers = towers.length;
        }
        
        if (sites != null)
        {
            var count = sites.length;
            for (let i = 0; i < count; i++)
            {
                var site = sites[i];
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
        
        if (controller.level == 2)
        {
            if (totalExtensions < 5)
            {
                buildExtension = true;
            }
        }
        else if (controller.level == 3)
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
        else if (controller.level == 4)
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
        else if (controller.level == 5)
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
        else if (controller.level == 6)
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
        else if (controller.level == 7)
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
        else if (controller.level == 8)
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
            built = BuildStructure(spawn, STRUCTURE_EXTENSION, debug);
        }
        else if (buildTower)
        {
            built = BuildStructure(spawn, STRUCTURE_TOWER, debug);
        }
    }
    
    return built;
}

module.exports = HandleBuilding;