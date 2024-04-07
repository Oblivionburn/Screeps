const Position = require("object.Position");
const GetNearest = require("util.GetNearest");

function GetHostile(room, x, y)
{
    const hostiles = room.find(FIND_HOSTILE_CREEPS);
    const hostileCount = hostiles.length;
    
    if (hostileCount > 0) 
    {
        const positions = [];
        
        for (let i = 0; i < hostileCount; i++)
        {
            const hostile = hostiles[i];
            
            positions[i] = new Position(hostile.pos.x, hostile.pos.y);
        }
        
        const nearest = GetNearest(x, y, positions);
        
        for (let i = 0; i < hostileCount; i++)
        {
            const hostile = hostiles[i];
            
            if (hostile.pos.x == nearest.X &&
                hostile.pos.y == nearest.Y)
            {
                return hostile;
            }
        }
    }
    
    return null;
}

module.exports = GetHostile;