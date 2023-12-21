/*
    Used by:
        handle.Towers
*/

const Position = require("object.Position");
const GetNearest = require("util.GetNearest");
const GetCreeps = require("util.GetCreeps");

function GetInjured(room, x, y)
{
    const allCreeps = room.find(FIND_MY_CREEPS);
    
    const injuredCreeps = GetCreeps(allCreeps, "Injured");
    const injuredCount = injuredCreeps.length;
    
    if (injuredCount > 0) 
    {
        const positions = [];
        
        for (let i = 0; i < injuredCount; i++)
        {
            const injured = injuredCreeps[i];
            positions.push(new Position(injured.pos.x, injured.pos.y));
        }
        
        const nearest = GetNearest(x, y, positions);
        if (nearest != null)
        {
            for (let i = 0; i < injuredCount; i++)
            {
                const injured = injuredCreeps[i];
                
                if (injured.pos.x == nearest.X &&
                    injured.pos.y == nearest.Y)
                {
                    return injured;
                }
            }
        }
    }
}

module.exports = GetInjured;