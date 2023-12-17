function Build(room, position, type)
{
    if (position.X > 0 &&
        position.X < 49 &&
        position.Y > 0 &&
        position.Y < 49)
    {
        let sites = [];
        let exists = false;

        //Check for terrain being anything other than plain
        if (room.getTerrain().get(position.X, position.Y) != 0)
        {
            exists = true;
        }
        
        if (!exists)
        {
            sites = room.find(FIND_MY_CONSTRUCTION_SITES);
            
            const siteCount = sites.length;
            for (let i = 0; i < siteCount; i++)
            {
                const site = sites[i];
                
                if (site.pos.x == position.X &&
                    site.pos.y == position.Y)
                {
                    exists = true;
                    break;
                }
            }
        }
        
        if (!exists)
        {
            const structures = room.find(FIND_STRUCTURES);
            
            const structureCount = structures.length;
            for (let i = 0; i < structureCount; i++)
            {
                const structure = structures[i];
                
                if (structure.pos.x == position.X &&
                    structure.pos.y == position.Y)
                {
                    exists = true;
                    break;
                }
            }
        }
        
        if (!exists &&
            sites.length < MAX_CONSTRUCTION_SITES)
        {
            room.createConstructionSite(position.X, position.Y, type);
            return true;
        }
    }
    
    return false;
}

module.exports = Build;