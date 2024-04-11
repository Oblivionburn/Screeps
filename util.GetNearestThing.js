const GetDistance = require("util.GetDistance");

function GetNearestThing(x, y, things) 
{
    if (things != null)
    {
        const count = things.length;
        if (count > 0)
        {
            let thing = things[0];
            let distance = GetDistance(x, y, thing.pos.x, thing.pos.y);
            
            for (let i = 0; i < count; i++)
            {
                const newThing = things[i];
                const newDistance = GetDistance(x, y, newThing.pos.x, newThing.pos.y);
                
                if (newDistance < distance &&
                    newDistance > 0)
                {
                    thing = newThing;
                    distance = newDistance;
                }
            }
            
            return thing;
        }
    }
    
    return null;
}

module.exports = GetNearestThing;