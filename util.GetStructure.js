var Vector = require('Vector');
var GetNearest = require('util.GetNearest');
var Available = require('util.Available');
var NextTo = require('util.NextTo');
var GetHarvestSpots_ForCreep = require('util.GetHarvestSpots_ForCreep');

function GetStructure(creep, structure, transfer)
{
    var sites = [];
    if (structure == "Source")
    {
        sites = creep.room.find(FIND_SOURCES);
    }
    else if (structure == "Spawn")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                if (transfer)
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.store[RESOURCE_ENERGY] < structure.store.getCapacity(RESOURCE_ENERGY);
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.energy < structure.energyCapacity;
                    }
                }
                else
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.store[RESOURCE_ENERGY] > 0;
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.energy > 0;
                    }
                }
            }
        });
    }
    else if (structure == "Extension")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                if (transfer)
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.store[RESOURCE_ENERGY] < structure.store.getCapacity(RESOURCE_ENERGY);
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.energy < structure.energyCapacity;
                    }
                }
                else
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.store[RESOURCE_ENERGY] > 0;
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.energy  > 0;
                    }
                    
                }
            }
        });
    }
    else if (structure == "Ruin")
    {
        sites = creep.room.find(FIND_RUINS,
        {
            filter: (structure) => 
            {
                return structure.store[RESOURCE_ENERGY] > 0;
            }
        });
    }
    else if (structure == "Tower")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_TOWER) 
                    && structure.store[RESOURCE_ENERGY] < structure.store.getCapacity();
            }
        });
    }
    else if (structure == "Site")
    {
        sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    }

    var count = sites.length;
    if (count > 0) 
    {
        if (structure == "Source")
        {
            var current = new Vector(creep.pos.x, creep.pos.y);
            for (let i = 0; i < count; i++)
            {
                var site = sites[i];
                var siteLocation = new Vector(site.pos.x, site.pos.y);
                if (NextTo(current, siteLocation))
                {
                    return site;
                }
            }
            
            var harvest_spots = GetHarvestSpots_ForCreep(creep);
            var harvestCount = harvest_spots.length;
            if (harvestCount > 0)
            {
                var location = GetNearest(creep.pos.x, creep.pos.y, harvest_spots);
        
                for (let i = 0; i < count; i++)
                {
                    var site = sites[i];
                    var siteLocation = new Vector(site.pos.x, site.pos.y);
                    if (NextTo(location, siteLocation))
                    {
                        return site;
                    }
                }
            }
        }
        else if (structure == "Site")
        {
            var site = sites[0];
            
            //Get biggest site to start with
            for (let i = 0; i < count; i++)
            {
                var current = sites[i];
                if (current.progressTotal > site.progressTotal)
                {
                    site = current;
                }
            }
            
            //Check for similar site that is closer to being built
            for (let i = 0; i < count; i++)
            {
                var current = sites[i];
                if (current.progress > site.progress &&
                    current.progressTotal == site.progressTotal)
                {
                    site = current;
                }
            }
            
            //If no similar sites started yet, get nearest
            if (site.progress == 0)
            {
                var locations = [];
                for (let i = 0; i < count; i++)
                {
                    var current = sites[i];
                    var location = new Vector(sites[i].pos.x, sites[i].pos.y);
                    
                    if (Available(creep, current.id) &&
                        current.progressTotal == site.progressTotal)
                    {
                        locations.push(location);
                    }
                }
                
                if (locations.length > 0)
                {
                    var location = GetNearest(creep.pos.x, creep.pos.y, locations);
                    for (let i = 0; i < count; i++)
                    {
                        var current = sites[i];
                        if (location.X == current.pos.x &&
                            location.Y == current.pos.y)
                        {
                            return current;
                        }
                    }
                }
            }
            
            return site;
        }
        else
        {
            var locations = [];
            for (let i = 0; i < count; i++)
            {
                var site = sites[i];
                var siteLocation = new Vector(site.pos.x, site.pos.y);
                if (Available(creep, site.id))
                {
                    locations.push(siteLocation);
                }
            }
            
            if (locations.length > 0)
            {
                var location = GetNearest(creep.pos.x, creep.pos.y, locations);
                for (let i = 0; i < count; i++)
                {
                    var site = sites[i];
                    if (location.X == site.pos.x &&
                        location.Y == site.pos.y)
                    {
                        return site;
                    }
                }
            }
        }
    }
    
    return null;
}

module.exports = GetStructure;