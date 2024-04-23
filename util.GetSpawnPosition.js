const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const CanBuild = require("util.CanBuild");

function GetSpawnPosition(room) 
{
    const sources = GetStructures(room, "source");
    if (sources.length > 1)
    {
        //Get middle point between 2 sources
        
        const source1 = sources[0];
        const source2 = sources[1];
        
        const x_diff = Math.abs(source1.pos.x - source2.pos.x);
        const y_diff = Math.abs(source1.pos.y - source2.pos.y);
        
        let x = 0;
        let y = 0;
        
        if (source1.pos.x > source2.pos.x)
        {
            x = source2.pos.x + Math.ceil(x_diff / 2);
        }
        else
        {
            x = source1.pos.x + Math.ceil(x_diff / 2);
        }
        
        if (source1.pos.y > source2.pos.y)
        {
            y = source2.pos.y + Math.ceil(y_diff / 2);
        }
        else
        {
            y = source1.pos.y + Math.ceil(y_diff / 2);
        }
        
        return new Position(x, y);
    }
    else if (sources.length > 0)
    {
        //Get position 5+ tiles away
        const source = sources[0];
        
        let found = false;
        let things = [];
    
        //Max of 10 tiles away
        for (let i = 5; i <= 10; i++)
        {
            for (let y = source.pos.y - i; y <= source.pos.y + i; y++)
            {
                if (y == source.pos.y - i ||
                    y == source.pos.y + i)
                {
                    for (let x = source.pos.x - i; x < source.pos.x + i; x++)
                    {
                        if (CanBuild(room, x, y))
                        {
                            return new Position(x, y);
                        }
                    }
                }
                else
                {
                    let x = source.pos.x - i;
                    if (CanBuild(room, x, y))
                    {
                        return new Position(x, y);
                    }
                    
                    let x = source.pos.x + i;
                    if (CanBuild(room, x, y))
                    {
                        return new Position(x, y);
                    }
                }
            }
        }
    }
    
    return null;
}

module.exports = GetSpawnPosition;