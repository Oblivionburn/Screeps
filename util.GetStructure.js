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
                    return (structure.structureType == STRUCTURE_SPAWN) 
                        && structure.energy < structure.energyCapacity;
                }
                else
                {
                    return (structure.structureType == STRUCTURE_SPAWN) 
                        && structure.energy > 0;
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
                    return (structure.structureType == STRUCTURE_EXTENSION) 
                        && structure.energy < structure.energyCapacity;
                }
                else
                {
                    return (structure.structureType == STRUCTURE_EXTENSION) 
                        && structure.energy > 0;
                }
            }
        });
    }
    else if (structure == "Ruin")
    {
        sites = creep.room.find(FIND_RUINS);
    }
    else if (structure == "Tower")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_TOWER) 
                    && structure.energy < structure.energyCapacity;
            }
        });
    }
    else if (structure == "Site")
    {
        sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    }

    if (sites.length > 0) 
    {
        if (structure == "Source")
        {
            var current = new Vector(creep.pos.x, creep.pos.y);
            for (let i = 0; i < sites.length; i++)
            {
                var site = new Vector(sites[i].pos.x, sites[i].pos.y);
                if (NextTo(current, site))
                {
                    return sites[i];
                }
            }
            
            var harvest_spots = GetHarvestSpots_ForCreep(creep);
            if (harvest_spots.length > 0)
            {
                var location = GetNearest(creep.pos.x, creep.pos.y, harvest_spots);
        
                for (let i = 0; i < sites.length; i++)
                {
                    var site = new Vector(sites[i].pos.x, sites[i].pos.y);
                    if (NextTo(location, site))
                    {
                        return sites[i];
                    }
                }
            }
        }
        else if (structure == "Site")
        {
            var site = sites[0];
            
            //Get biggest site to start with
            for (let i = 0; i < sites.length; i++)
            {
                if (sites[i].progressTotal > site.progressTotal)
                {
                    site = sites[i];
                }
            }
            
            //Check for similar site that is closer to being built
            for (let i = 0; i < sites.length; i++)
            {
                if (sites[i].progress > site.progress &&
                    sites[i].progressTotal == site.progressTotal)
                {
                    site = sites[i];
                }
            }
            
            //If no similar sites started yet, get nearest
            if (site.progress == 0)
            {
                var locations = [];
                for (let i = 0; i < sites.length; i++)
                {
                    var location = new Vector(sites[i].pos.x, sites[i].pos.y);
                    
                    if (Available(creep, sites[i].id) &&
                        sites[i].progressTotal == site.progressTotal)
                    {
                        locations.push(location);
                    }
                }
                
                if (locations.length > 0)
                {
                    var location = GetNearest(creep.pos.x, creep.pos.y, locations);
                    for (let i = 0; i < sites.length; i++)
                    {
                        if (location.X == sites[i].pos.x &&
                            location.Y == sites[i].pos.y)
                        {
                            return sites[i];
                        }
                    }
                }
            }
            
            return site;
        }
        else
        {
            var locations = [];
            for (let i = 0; i < sites.length; i++)
            {
                var location = new Vector(sites[i].pos.x, sites[i].pos.y);
                
                if (Available(creep, sites[i].id))
                {
                    locations.push(location);
                }
            }
            
            if (locations.length > 0)
            {
                var location = GetNearest(creep.pos.x, creep.pos.y, locations);
                for (let i = 0; i < sites.length; i++)
                {
                    if (location.X == sites[i].pos.x &&
                        location.Y == sites[i].pos.y)
                    {
                        return sites[i];
                    }
                }
            }
        }
    }
    
    return null;
}

module.exports = GetStructure;