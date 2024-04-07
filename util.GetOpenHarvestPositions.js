const Position = require("object.Position");
const Occupied = require("util.Occupied");

function GetOpenHarvestPositions(creep, source)
{
    const positions = [];
    
    //Check every position around the source
    for (let y = source.pos.y - 1; y < source.pos.y + 2; y++)
    {
        for (let x = source.pos.x - 1; x < source.pos.x + 2; x++)
        {
            //Check position occupied
            if (!Occupied(creep, x, y))
            {
                positions.push(new Position(x, y));
            }
        }
    }
    
    return positions;
}

module.exports = GetOpenHarvestPositions;