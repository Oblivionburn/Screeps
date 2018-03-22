var Vector = require('Vector');
var Available = require('util.Available');
var GetNearest = require('util.GetNearest');

function GetRepairs(creep, structure)
{
    var sites = [];
    var site = null;
    
    if (structure == "Spawn")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_SPAWN) 
                        && structure.hits < structure.hitsMax;
                
            }
        });
    }
    else if (structure == "Extension")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_EXTENSION) 
                        && structure.hits < structure.hitsMax;
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
                    && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (structure == "Road")
    {
        sites = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_ROAD) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (structure == "Wall")
    {
        sites = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_WALL) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (structure == "Rampart")
    {
        sites = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_RAMPART) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }

    if (sites.length > 0) 
    {
        if (structure == "Spawn" ||
            structure == "Extension" ||
            structure == "Wall" ||
            structure == "Rampart")
        {
            //Get structure with lowest hits
            
            for (i = 0; i < sites.length; i++)
            {
                if (Available(creep, sites[i].id))
                {
                    site = sites[i];
                    break;
                }
            }
            
            if (site != null)
            {
                var hp = site.hits;
                
                for (i = 0; i < sites.length; i++)
                {
                    if (sites[i].hits < hp &&
                        Available(creep, sites[i].id))
                    {
                        hp = sites[i].hits;
                        site = sites[i];
                    }
                }
            }
        }
        else
        {
            //Get nearest structure
            
            var count = 0;
        
            var locations = [];
            for (i = 0; i < sites.length; i++)
            {
                var location = new Vector(sites[i].pos.x, sites[i].pos.y);
                
                if (Available(creep, sites[i].id))
                {
                    locations[count] = location;
                    count++;
                }
            }
            
            if (locations.length > 0)
            {
                var location = GetNearest(creep.pos.x, creep.pos.y, locations);
                for (i = 0; i < sites.length; i++)
                {
                    if (sites[i].pos.x == location.X &&
                        sites[i].pos.y == location.Y)
                    {
                        return sites[i];
                    }
                }
            }
        }
    }
    
    return site;
}

module.exports = GetRepairs;