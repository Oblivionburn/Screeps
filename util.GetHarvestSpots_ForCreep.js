var Vector = require('Vector');
var GetStructures = require('util.GetStructures');
var Occupied = require('util.Occupied');

function GetHarvestSpots_ForCreep(creep)
{
    var spots = [];
    
    var sources = GetStructures(creep.room, "Source");
    if (sources.length > 0) 
    {
        for (let i = 0; i < sources.length; i++)
        {
            for (let y = sources[i].pos.y - 1; y < sources[i].pos.y + 2; y++)
            {
                for (let x = sources[i].pos.x - 1; x < sources[i].pos.x + 2; x++)
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