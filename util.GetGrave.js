var Vector = require('Vector');
var GetNearest = require('util.GetNearest');

function GetGrave(creep) 
{
    var sites = [];
    
    var graves = creep.room.find(FIND_TOMBSTONES);
    if (graves.length > 0)
    {
        var count = 0;
        
        for (i = 0; i < graves.length; i++)
        {
            if (graves[i].store.energy > 0)
            {
                sites[count] = graves[i];
                count++;
                break;
            }
        }
    }
    
    if (sites.length > 0) 
    {
        var locations = [];
        for (i = 0; i < sites.length; i++)
        {
            locations[i] = new Vector(sites[i].pos.x, sites[i].pos.y);
        }
        
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
    
    return null;
}

module.exports = GetGrave;