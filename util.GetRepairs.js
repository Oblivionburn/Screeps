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

    var count = sites.length;
    if (count > 0) 
    {
        if (structure == "Spawn" ||
            structure == "Extension" ||
            structure == "Wall" ||
            structure == "Rampart")
        {
            //Get structure with lowest hits
            
            for (let i = 0; i < count; i++)
            {
                var current = sites[i];
                if (Available(creep, current.id))
                {
                    site = current;
                    break;
                }
            }
            
            if (site != null)
            {
                var hp = site.hits;
                
                for (let i = 0; i < count; i++)
                {
                    var current = sites[i];
                    if (current.hits < hp &&
                        Available(creep, current.id))
                    {
                        hp = current.hits;
                        site = current;
                    }
                }
            }
        }
        else
        {
            //Get nearest structure
            var locations = [];
            for (let i = 0; i < count; i++)
            {
                var current = sites[i];
                var location = new Vector(current.pos.x, current.pos.y);
                
                if (Available(creep, current.id))
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
                    if (current.pos.x == location.X &&
                        current.pos.y == location.Y)
                    {
                        return current;
                    }
                }
            }
        }
    }
    
    return site;
}

module.exports = GetRepairs;