var Vector = require('Vector');
var GetNearest = require('util.GetNearest');
var GetCreeps = require('util.GetCreeps');

function GetInjured(creep)
{
    var injuredCreeps = GetCreeps(creep.room, "Injured");
    var count = injuredCreeps.length;
    if (count > 0) 
    {
        var locations = [];
        for (let i = 0; i < count; i++)
        {
            var injured = injuredCreeps[i];
            locations[i] = new Vector(injured.pos.x, injured.pos.y);
        }
        
        var location = GetNearest(creep.pos.x, creep.pos.y, locations);
        for (let i = 0; i < count; i++)
        {
            var injured = injuredCreeps[i];
            if (injured.pos.x == location.X &&
                injured.pos.y == location.Y)
            {
                return injured;
            }
        }
    }
}

module.exports = GetInjured;