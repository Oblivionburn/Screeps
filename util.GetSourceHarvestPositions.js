const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const GetTerrain = require("util.GetTerrain");

function GetSourceHarvestPositions(room)
{
    const positions = [];
    
    const sources = room.find(FIND_SOURCES);
    const sourceCount = sources.length;
    
    for (let i = 0; i < sourceCount; i++)
    {
        const source = sources[i];
        
        //Check every position around the source
        for (let y = source.pos.y - 1; y < source.pos.y + 2; y++)
        {
            for (let x = source.pos.x - 1; x < source.pos.x + 2; x++)
            {
                //Check for wall at position
                const terrain = GetTerrain(room, x, y);
                if (terrain != "wall")
                {
                    //If clear, add position to list
                    positions.push(new Position(x, y));
                }
            }
        }
    }
    
    return positions;
}

module.exports = GetSourceHarvestPositions;