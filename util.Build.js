function Build(room, position, type)
{
    if (position.X > 0 &&
        position.X < 49 &&
        position.Y > 0 &&
        position.Y < 49)
    {
        let sites = room.find(FIND_MY_CONSTRUCTION_SITES)
            .some(site => site.pos.x == position.X &&
                          site.pos.y == position.Y);
                          
        let exists = room.getTerrain().get(position.X, position.Y) != 0;
        
        if (!exists)
        {
            exists = room.find(FIND_STRUCTURES)
                .some(site => structure.pos.x == position.X &&
                              structure.pos.y == position.Y);
        }
        
        if (!exists &&
            sites.length < MAX_CONSTRUCTION_SITES)
        {
            if (type == STRUCTURE_SPAWN)
            {
                room.createConstructionSite(position.X, position.Y, type, "HQ_" + room.name);
            }
            else
            {
                room.createConstructionSite(position.X, position.Y, type);
            }
            
            console.log("Building " + type + ": " + position.X + "," + position.Y);
            return true;
        }
    }
    
    return false;
}

module.exports = Build;