const GetStructures = require("util.GetStructures");

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
    }
}

module.exports = GetSpawnPosition;