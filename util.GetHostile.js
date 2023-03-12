var Vector = require('Vector');
var GetNearest = require('util.GetNearest');

function GetHostile(creep)
{
    var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
    var count = hostiles.length;
    if (count > 0) 
    {
        var locations = [];
        for (let i = 0; i < count; i++)
        {
            var hostile = hostiles[i];
            locations[i] = new Vector(hostile.pos.x, hostile.pos.y);
        }
        
        var location = GetNearest(creep.pos.x, creep.pos.y, locations);
        for (let i = 0; i < count; i++)
        {
            var hostile = hostiles[i];
            if (hostile.pos.x == location.X &&
                hostile.pos.y == location.Y)
            {
                return hostile;
            }
        }
    }
}

module.exports = GetHostile;