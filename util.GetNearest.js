var GetDistance = require('util.GetDistance');

function GetNearest(x, y, locations) 
{
    var location = locations[0];
    var distance = GetDistance(x, y, location.X, location.Y);
    
    for (i = 0; i < locations.length; i++)
    {
        var new_distance = GetDistance(x, y, locations[i].X, locations[i].Y);
        
        if (new_distance < distance &&
            new_distance > 0)
        {
            location = locations[i];
            distance = new_distance;
        }
    }
    
    return location;
}

module.exports = GetNearest;