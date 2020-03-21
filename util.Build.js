function Build(room, location, type)
{
    if (location.X > 0 &&
        location.X < 49 &&
        location.Y > 0 &&
        location.Y < 49 &&
        sites.length < MAX_CONSTRUCTION_SITES)
    {
        var exists = false;

        //Check for terrain being anything other than plain
        if (room.getTerrain().get(location.X, location.Y) != 0)
        {
            exists = true;
        }
        
        if (!exists)
        {
            var sites = room.find(FIND_MY_CONSTRUCTION_SITES);
            for (let i = 0; i < sites.length; i++)
            {
                if (sites[i].pos.x == location.X &&
                    sites[i].pos.y == location.Y)
                {
                    exists = true;
                    break;
                }
            }
        }
        
        if (!exists)
        {
            var structures = room.find(FIND_STRUCTURES);
            for (let i = 0; i < structures.length; i++)
            {
                if (structures[i].pos.x == location.X &&
                    structures[i].pos.y == location.Y)
                {
                    exists = true;
                    break;
                }
            }
        }
        
        if (!exists)
        {
            room.createConstructionSite(location.X, location.Y, type);
            return true;
        }
    }
    
    return false;
}

module.exports = Build;