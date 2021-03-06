function Pave(creep) 
{
    var blocked = false;
    var sites = [];
    
    sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    if (sites.length == MAX_CONSTRUCTION_SITES)
    {
        blocked = true;
    }
    
    if (!blocked)
    {
        for (let i = 0; i < sites.length; i++)
        {
            if (sites[i].pos.x == creep.pos.x &&
                sites[i].pos.y == creep.pos.y)
            {
                blocked = true;
                break;
            }
        }
    }
    
    if (!blocked)
    {
        sites = creep.room.find(FIND_STRUCTURES);
        for (let i = 0; i < sites.length; i++)
        {
            if (sites[i].pos.x == creep.pos.x &&
                sites[i].pos.y == creep.pos.y)
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
