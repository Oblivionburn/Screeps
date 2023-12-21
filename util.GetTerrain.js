/*
    Used by:
        util.GetSourceHarvestPositions
*/

function GetTerrain(room, x, y)
{
    const things = room.lookAt(x, y);
    if (things != null)
    {
        const thingCount = things.length;
        for (let t = 0; t < thingCount; t++)
        {
            const thing = things[t];
            
            if (thing.type == "terrain")
            {
                return thing.terrain;
            }
        }
    }
    
    return null;
}

module.exports = GetTerrain;