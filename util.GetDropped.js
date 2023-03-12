var Vector = require('Vector');
var GetNearest = require('util.GetNearest');

function GetDropped(creep) 
{
    var sites = creep.room.find(FIND_DROPPED_RESOURCES);
    var count = sites.length;
    if (count > 0) 
    {
        var locations = [];
        for (let i = 0; i < count; i++)
        {
            var site = sites[i];
            locations[i] = new Vector(site.pos.x, site.pos.y);
        }
        
        var location = GetNearest(creep.pos.x, creep.pos.y, locations);
        for (let i = 0; i < count; i++)
        {
            var site = sites[i];
            if (site.pos.x == location.X &&
                site.pos.y == location.Y)
            {
                return site;
            }
        }
    }
    
    return null;
}

module.exports = GetDropped;