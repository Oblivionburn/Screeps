var Vector = require('Vector');
var GetStructures = require('util.GetStructures');
var Occupied = require('util.Occupied');

function GetHarvestSpots_ForRoom(room)
{
    var spots = [];
    
    var sources = GetStructures(room, "Source");
    if (sources.length > 0) 
    {
        var count = 0;
        
        for (i = 0; i < sources.length; i++)
        {
            for (y = sources[i].pos.y - 1; y < sources[i].pos.y + 2; y++)
            {
                for (x = sources[i].pos.x - 1; x < sources[i].pos.x + 2; x++)
                {
                    var target = room.lookAt(x, y);
                    if (target != null)
                    {
                        for (t = 0; t < target.length; t++)
                        {
                            if (target[t].type == "terrain" &&
                                target[t].terrain != "wall")
                            {
                                var spot = new Vector(x, y);
                                spots[count] = spot;
                                count++;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    
    return spots;
}

module.exports = GetHarvestSpots_ForRoom;