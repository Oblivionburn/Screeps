var Vector = require('Vector');
var GetStructures = require('util.GetStructures');
var Occupied = require('util.Occupied');

function GetHarvestSpots_ForRoom(room)
{
    var spots = [];
    
    var sources = GetStructures(room, "Source", false);
    var count = sources.length;
    if (count > 0) 
    {
        for (let i = 0; i < count; i++)
        {
            var source = sources[i];
            for (let y = source.pos.y - 1; y < source.pos.y + 2; y++)
            {
                for (let x = source.pos.x - 1; x < source.pos.x + 2; x++)
                {
                    var targets = room.lookAt(x, y);
                    if (targets != null)
                    {
                        var targetCount = targets.length;
                        for (let t = 0; t < targetCount; t++)
                        {
                            var target = targets[t];
                            if (target.type == "terrain" &&
                                target.terrain != "wall")
                            {
                                var spot = new Vector(x, y);
                                spots.push(spot);
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