var Vector = require('Vector');
var GetNearest = require('util.GetNearest');

function GetHostile(creep)
{
    var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
    if (hostiles.length > 0) 
    {
        var locations = [];
        for (i = 0; i < hostiles.length; i++)
        {
            locations[i] = new Vector(hostiles[i].pos.x, hostiles[i].pos.y);
        }
        
        var location = GetNearest(creep.pos.x, creep.pos.y, locations);
        for (i = 0; i < hostiles.length; i++)
        {
            if (hostiles[i].pos.x == location.X &&
                hostiles[i].pos.y == location.Y)
            {
                return hostiles[i];
            }
        }
    }
}

module.exports = GetHostile;