var GetDistance = require('util.GetDistance');

function GetNearest(x, y, locations) 
{
    var location = locations[0];
    var distance = GetDistance(x, y, location.X, location.Y);
    
    var count = locations.length;
    for (let i = 0; i < count; i++)
    {
        var current = locations[i];
        var new_distance = GetDistance(x, y, current.X, current.Y);
        
        if (new_distance < distance &&
            new_distance > 0)
        {
            location = current;
            distance = new_distance;
        }
    }
    
    return location;
}

module.exports = GetNearest;