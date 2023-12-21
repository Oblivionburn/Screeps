/*
    Used by:
        task.Harvest
        task.Upgrade
*/

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
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
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
        sitesCount = sites.length;
        
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
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
