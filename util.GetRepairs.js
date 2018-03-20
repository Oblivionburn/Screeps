var Vector = require('Vector');
var GetNearest = require('util.GetNearest');
var Available = require('util.Available');
var Occupied = require('util.Occupied');

function GetRepairs(creep)
{
    var sites = [];
    sites = creep.room.find(FIND_STRUCTURES, 
    {
        filter: (structure) => 
        {
            return structure.hits < structure.hitsMax;
        }
    });

    if (sites.length > 0) 
    {
        var count = 0;
        
        var locations = [];
        for (i = 0; i < sites.length; i++)
        {
            var location = new Vector(sites[i].pos.x, sites[i].pos.y);
            
            if (Available(creep, sites[i].id) &&
                !Occupied(location))
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
    
    return null;
}

module.exports = GetRepairs;