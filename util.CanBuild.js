function CanBuild(room, x, y)
{
    //Check if coords are within room boundaries
    if (x > 0 &&
        x < 49 &&
        y > 0 &&
        y < 49)
    {
        //Check if there's a structure at the coords
        const structures = room.lookForAt(LOOK_STRUCTURES, x, y);
        if (structures.length > 0)
        {
            return false;
        }
        
        //Check if there's a wall at the coords
        const wall = room.getTerrain().get(x, y) == 1;      
        if (wall)
        {
            return false;
        }
        
        //Check if there's a construction site at the coords
        const constructionSites = room.lookForAt(LOOK_CONSTRUCTION_SITES, x, y);
        if (constructionSites.length > 0)
        {
            return false;
        }
        
        //Check if we hit max construction sites
        const allSites = room.find(FIND_MY_CONSTRUCTION_SITES);
        if (allSites.length >= MAX_CONSTRUCTION_SITES)
        {
            return false;
        }
        
        return true;
    }
    
    return false;
}

module.exports = CanBuild;