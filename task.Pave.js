function Pave(creep) 
{
    let blocked = false;
    let sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    let sitesCount = sites.length;
    
    if (sitesCount == MAX_CONSTRUCTION_SITES)
    {
        blocked = true;
    }
    
    if (!blocked)
    {
        blocked = sites.some(site => site.pos.x == creep.pos.x &&
                                     site.pos.y == creep.pos.y);
    }
    
    if (!blocked)
    {
        sites = creep.room.find(FIND_STRUCTURES);
        blocked = sites.some(site => site.pos.x == creep.pos.x &&
                                     site.pos.y == creep.pos.y);
    }
    
    if (!blocked)
    {
        creep.room.createConstructionSite(creep.pos.x, creep.pos.y, STRUCTURE_ROAD);
    }
}

module.exports = Pave;
