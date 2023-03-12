var Vector = require('Vector');
var GetNearest = require('util.GetNearest');

function GetGrave(creep) 
{
    var sites = [];
    
    var graves = creep.room.find(FIND_TOMBSTONES);
    var gravesCount = graves.length;
    if (gravesCount > 0)
    {
        for (let i = 0; i < gravesCount; i++)
        {
            var grave = graves[i];
            if (grave.store[RESOURCE_ENERGY] > 0)
            {
                sites.push(grave);
                break;
            }
        }
    }
    
    var sitesCount = sites.length;
    if (sitesCount > 0) 
    {
        var locations = [];
        for (let i = 0; i < sitesCount; i++)
        {
            var site = sites[i];
            locations[i] = new Vector(site.pos.x, site.pos.y);
        }
        
        var location = GetNearest(creep.pos.x, creep.pos.y, locations);
        for (let i = 0; i < sitesCount; i++)
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

module.exports = GetGrave;