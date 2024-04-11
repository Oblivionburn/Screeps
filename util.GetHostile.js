const Position = require("object.Position");
const GetNearestThing = require("util.GetNearestThing");

function GetHostile(room, x, y)
{
    const hostiles = room.find(FIND_HOSTILE_CREEPS);
    const hostileCount = hostiles.length;
    
    if (hostileCount > 0) 
    {
        return GetNearestThing(x, y, hostiles);
    }
    
    return null;
}

module.exports = GetHostile;