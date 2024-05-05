const Position = require("object.Position");
const GetStructures = require("util.GetStructures");
const CanBuild = require("util.CanBuild");

function GetSpawnPosition(room) 
{
    let x = 0;
    let y = 0;
    
    const sources = GetStructures(room, "source");
    if (sources.length > 1)
    {
        //Get middle point between 2 sources
        
        const source1 = sources[0];
        const source2 = sources[1];
        
        const x_diff = Math.abs(source1.pos.x - source2.pos.x);
        const y_diff = Math.abs(source1.pos.y - source2.pos.y);

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
            for (let y_pos = source.pos.y - i; y_pos <= source.pos.y + i; y_pos++)
            {
                if (y_pos == source.pos.y - i ||
                    y_pos == source.pos.y + i)
                {
                    for (let x_pos = source.pos.x - i; x_pos < source.pos.x + i; x_pos++)
                    {
                        if (CanBuild(room, x_pos, y_pos))
                        {
                            return new Position(x_pos, y_pos);
                        }
                    }
                }
                else
                {
                    x = source.pos.x - i;
                    if (CanBuild(room, x, y))
                    {
                        return new Position(x, y);
                    }
                    
                    x = source.pos.x + i;
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