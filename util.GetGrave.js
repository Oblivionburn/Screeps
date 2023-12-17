const Position = require("object.Position");
const GetNearest = require("util.GetNearest");

function GetGrave(creep) 
{
    const sites = [];
    
    const graves = creep.room.find(FIND_TOMBSTONES);
    const gravesCount = graves.length;
    
    for (let i = 0; i < gravesCount; i++)
    {
        const grave = graves[i];
        
        if (grave.store[RESOURCE_ENERGY] > 0)
        {
            sites.push(grave);
            break;
        }
    }
    
    const sitesCount = sites.length;
    if (sitesCount > 0) 
    {
        const positions = [];
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
            positions.push(new Position(site.pos.x, site.pos.y));
        }
        
        const nearest = GetNearest(creep.pos.x, creep.pos.y, positions);
        
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
            if (site.pos.x == nearest.X &&
                site.pos.y == nearest.Y)
            {
                return site;
            }
        }
    }
    
    return null;
}

module.exports = GetGrave;