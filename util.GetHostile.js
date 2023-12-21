/*
    Used by:
        ai.GetTask
        handle.Towers
*/

const Position = require("object.Position");
const GetNearest = require("util.GetNearest");
const GetFlags = require("util.GetFlags");

function GetHostile(room, x, y)
{
    const flags = GetFlags(room, "Hostile");
    const flagCount = flags.length;
    
    if (flagCount > 0)
    {
        const positions = [];
        
        for (let i = 0; i < flagCount; i++)
        {
            const flag = flags[i];
            
            positions.push(new Position(flag.pos.x, flag.pos.y));
        }
        
        const nearest = GetNearest(x, y, positions);
        
        for (let i = 0; i < flagCount; i++)
        {
            const flag = flags[i];
            
            if (flag.pos.x == nearest.X &&
                flag.pos.y == nearest.Y)
            {
                return flag;
            }
        }
    }
    
    const hostiles = room.find(FIND_HOSTILE_CREEPS);
    const hostileCount = hostiles.length;
    
    if (hostileCount > 0) 
    {
        const positions = [];
        
        for (let i = 0; i < hostileCount; i++)
        {
            const hostile = hostiles[i];
            
            positions.push(new Position(hostile.pos.x, hostile.pos.y));
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