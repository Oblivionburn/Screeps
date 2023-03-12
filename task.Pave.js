function Pave(creep) 
{
    var blocked = false;
    var sites = [];
    
    sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    var count = sites.length;
    
    if (sites.length == MAX_CONSTRUCTION_SITES)
    {
        blocked = true;
    }
    
    if (!blocked)
    {
        for (let i = 0; i < count; i++)
        {
            var site = sites[i];
            if (site.pos.x == creep.pos.x &&
                site.pos.y == creep.pos.y)
            {
                blocked = true;
                break;
            }
        }
    }
    
    if (!blocked)
    {
        sites = creep.room.find(FIND_STRUCTURES);
        var count = sites.length;
        
        for (let i = 0; i < count; i++)
        {
            var site = sites[i];
            if (site.pos.x == creep.pos.x &&
                site.pos.y == creep.pos.y)
            {
                blocked = true;
                break;
            }
        }
    }
    
    if (!blocked)
    {
        creep.room.createConstructionSite(creep.pos.x, creep.pos.y, STRUCTURE_ROAD);
    }
}

module.exports = Pave;
