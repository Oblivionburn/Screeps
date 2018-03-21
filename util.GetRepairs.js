var Available = require('util.Available');

/*
    Gets a particular structure type with the least amount of hits
    that isn't already a target of another creep
*/
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
    
    return site;
}

module.exports = GetRepairs;