var Vector = require('Vector');
var GetNearest = require('util.GetNearest');
var Available = require('util.Available');
var Occupied = require('util.Occupied');
var NextTo = require('util.NextTo');

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
        var count = 0;
        
        var locations = [];
        for (i = 0; i < sites.length; i++)
        {
            var location = new Vector(sites[i].pos.x, sites[i].pos.y);
            
            if (structure != "Source")
            {
                if (Available(creep, sites[i].id) &&
                    !Occupied(creep, location))
                {
                    locations[count] = location;
                    count++;
                }
            }
            else
            {
                var path = creep.room.findPath(creep.pos, sites[i].pos, {ignoreCreeps: 1});

                var target = null;
                for (p = 0; p < path.length; p++)
                {
                    if (path[p] != null)
                    {
                        var current = new Vector(path[p].x, path[p].y);
                        if (NextTo(current, location))
                        {
                            target = current;
                            break;
                        }
                        else if (current.X == location.X &&
                                 current.Y == location.Y)
                        {
                            target = new Vector(creep.pos.x, creep.pos.y);
                        }
                    }
                }
                
                if (target != null)
                {
                    if (!Occupied(creep, target))
                    {
                        locations[count] = location;
                        count++;
                    }
                }
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
    
    return null;
}

module.exports = GetStructure;