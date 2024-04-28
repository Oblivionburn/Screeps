function CanBuild(room, x, y)
{
    if (x > 0 &&
        x < 49 &&
        y > 0 &&
        y < 49)
    {
        let sites = room.find(FIND_MY_CONSTRUCTION_SITES)
            .some(site => site.pos.x == x &&
                          site.pos.y == y);
                          
        let exists = room.getTerrain().get(x, y) != 0;
        
        if (!exists)
        {
            exists = room.find(FIND_STRUCTURES)
                .some(site => site.pos.x == x &&
                              site.pos.y == y);
        }
        
        if (!exists &&
            sites.length < MAX_CONSTRUCTION_SITES)
        {
            return true;
        }
    }
    
    return false;
}

module.exports = CanBuild;