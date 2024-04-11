function GetTerrain(room, x, y)
{
    const things = room.lookAt(x, y)
        .filter(thing => thing.type == "terrain");
    if (things.length > 0)
    {
        return things[0].terrain;
    }
    
    return null;
}

module.exports = GetTerrain;