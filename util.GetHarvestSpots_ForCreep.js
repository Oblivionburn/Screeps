var Vector = require('Vector');
var GetStructures = require('util.GetStructures');
var Occupied = require('util.Occupied');

function GetHarvestSpots_ForCreep(creep)
{
    var spots = [];
    
    var sources = GetStructures(creep.room, "Source");
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
                    var spot = new Vector(x, y);
                    if (!Occupied(creep, spot))
                    {
                        spots.push(spot);
                        break;
                    }
                }
            }
        }
    }
    
    return spots;
}

module.exports = GetHarvestSpots_ForCreep;