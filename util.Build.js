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
            let result = 1
            if (type == STRUCTURE_SPAWN)
            {
                result = room.createConstructionSite(position.X, position.Y, type, "HQ_" + room.name);
            }
            else
            {
                result = room.createConstructionSite(position.X, position.Y, type);
            }
            
            if (result == 0)
            {
                console.log("Building " + type + ": " + position.X + "," + position.Y);
            }
            else
            {
                console.log("Error building " + type + " in room " + room.name + " at " + position.X + "," + position.Y + ": " + GetError(result));
            }
            
            return true;
        }
    }
    
    return false;
}

module.exports = Build;