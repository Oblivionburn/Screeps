var Vector = require('Vector');
var GetStructures = require('util.GetStructures');
var Build = require('util.Build');

function HandleBuilding(debug)
{
    var built = "";
    
    for (var name in Game.spawns)
    {
        var spawn = Game.spawns[name];
        var controller = spawn.room.controller;
        var sites = GetStructures(spawn.room, "Site", false);
        var extensions = GetStructures(spawn.room, "Extension", false);
        
        var totalExtensions = 0;
        if (extensions != null)
        {
            totalExtensions = extensions.length;
        }
        
        if (sites != null)
        {
            for (let i = 0; i < sites.length; i++)
            {
                if (sites[i].structureType == STRUCTURE_EXTENSION)
                {
                    totalExtensions++;
                }
            }
        }
        
        var buildExtension = false;
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
        }
        else if (controller.level == 4)
        {
            if (totalExtensions < 20)
            {
                buildExtension = true;
            }
        }
        else if (controller.level == 5)
        {
            if (totalExtensions < 30)
            {
                buildExtension = true;
            }
        }
        else if (controller.level == 6)
        {
            if (totalExtensions < 40)
            {
                buildExtension = true;
            }
        }
        else if (controller.level == 7)
        {
            if (totalExtensions < 50)
            {
                buildExtension = true;
            }
        }
        else if (controller.level == 8)
        {
            if (totalExtensions < 60)
            {
                buildExtension = true;
            }
        }
        
        if (buildExtension)
        {
            var success = false;
            var turn = false;
            
            var location = new Vector(spawn.pos.x, spawn.pos.y);
            for (let i = 1; i < 10; i++)
            {
                var loop = i;
                
                if (turn)
                {
                    for (let j = 0; j < loop; j++)
                    {
                        location.Y++;
                        success = Build(spawn.room, sites, location, STRUCTURE_EXTENSION);
                        
                        if (success)
                        {
                            built = "Built extension in room " + spawn.room.name + " at " + location.X + "," + location.Y;
                            break;
                        }
                    }
                    
                    if (success)
                    {
                        break;
                    }
                    else
                    {
                        for (let j = 0; j < loop; j++)
                        {
                            location.X--;
                            success = Build(spawn.room, sites, location, STRUCTURE_EXTENSION);
                            
                            if (success)
                            {
                                break;
                            }
                        }
                    }
                    
                    if (success)
                    {
                        break;
                    }
                    else
                    {
                        turn = false;
                    }
                }
                else
                {
                    for (let j = 0; j < loop; j++)
                    {
                        location.Y--;
                        success = Build(spawn.room, sites, location, STRUCTURE_EXTENSION);
                        
                        if (success)
                        {
                            break;
                        }
                    }
                    
                    if (success)
                    {
                        break;
                    }
                    else
                    {
                        for (let j = 0; j < loop; j++)
                        {
                            location.X++;
                            success = Build(spawn.room, sites, location, STRUCTURE_EXTENSION);
                            
                            if (success)
                            {
                                break;
                            }
                        }
                    }
                    
                    if (success)
                    {
                        break;
                    }
                    else
                    {
                        turn = true;
                    }
                }
            }
            
            if (success)
            {
                built = "Built extension in room " + spawn.room.name + " at " + location.X + "," + location.Y;
            }
        }
    }
    
    return built;
}

module.exports = HandleBuilding;