var Vector = require('Vector');
var GetNearest = require('util.GetNearest');
var GetCreeps = require('util.GetCreeps');

function GetInjured(creep)
{
    var injured = GetCreeps(creep.room, "Injured");
    if (injured.length > 0) 
    {
        var locations = [];
        for (let i = 0; i < injured.length; i++)
        {
            locations[i] = new Vector(injured[i].pos.x, injured[i].pos.y);
        }
        
        var location = GetNearest(creep.pos.x, creep.pos.y, locations);
        for (let i = 0; i < injured.length; i++)
        {
            if (injured[i].pos.x == location.X &&
                injured[i].pos.y == location.Y)
            {
                return injured[i];
            }
        }
    }
}

module.exports = GetInjured;