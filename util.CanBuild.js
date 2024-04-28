function CanBuild(room, x, y)
{
    if (x > 0 &&
        x < 49 &&
        y > 0 &&
        y < 49)
    {
        let allSites = room.find(FIND_MY_CONSTRUCTION_SITES);
                          
        let exists = allSites
            .some(site => site.pos.x == x &&
                          site.pos.y == y);
                          
        if (!exists)
        {
            exists = room.getTerrain().get(x, y) != 0;
        }
        
        if (!exists)
        {
            exists = room.find(FIND_STRUCTURES)
                .some(site => site.pos.x == x &&
                              site.pos.y == y);
        }
        
        if (!exists &&
            allSites.length < MAX_CONSTRUCTION_SITES)
        {
            return true;
        }
    }
    
    return false;
}

module.exports = CanBuild;