const Position = require("object.Position");
const GetNearestThing = require("util.GetNearestThing");
const GetCreeps = require("util.GetCreeps");

function GetInjured(room, x, y)
{
    const injuredCreeps = GetCreeps(room, "Injured");
    const injuredCount = injuredCreeps.length;
    
    if (injuredCount > 0) 
    {
        return GetNearestThing(x, y, injuredCreeps);
    }
    
    return null;
}

module.exports = GetInjured;