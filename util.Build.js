function Build(room, location, type)
{
    if (location.X > 0 &&
        location.X < 49 &&
        location.Y > 0 &&
        location.Y < 49)
    {
        var sites = [];
        var exists = false;

        //Check for terrain being anything other than plain
        if (room.getTerrain().get(location.X, location.Y) != 0)
        {
            exists = true;
        }
        
        if (!exists)
        {
            sites = room.find(FIND_MY_CONSTRUCTION_SITES);
            
            var count = sites.length;
            for (let i = 0; i < count; i++)
            {
                var site = sites[i];
                if (site.pos.x == location.X &&
                    site.pos.y == location.Y)
                {
                    exists = true;
                    break;
                }
            }
        }
        
        if (!exists)
        {
            var structures = room.find(FIND_STRUCTURES);
            
            var count = structures.length;
            for (let i = 0; i < count; i++)
            {
                var structure = structures[i];
                if (structure.pos.x == location.X &&
                    structure.pos.y == location.Y)
                {
                    exists = true;
                    break;
                }
            }
        }
        
        if (!exists &&
            sites.length < MAX_CONSTRUCTION_SITES)
        {
            room.createConstructionSite(location.X, location.Y, type);
            return true;
        }
    }
    
    return false;
}

module.exports = Build;