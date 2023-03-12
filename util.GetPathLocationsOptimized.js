function GetPathLocationsOptimized(possible, location) 
{
    var locations = [];

    for (let p = 0; p < possible.length; p++)
    {
        var posLocation = possible[p];
        
        if (posLocation.X == location.X &&
            posLocation.Y == location.Y - 1)
        {
            //North
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X + 1 &&
                 posLocation.Y == location.Y)
        {
            //East
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X &&
                 posLocation.Y == location.Y + 1)
        {
            //South
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X - 1 &&
                 posLocation.Y == location.Y)
        {
            //West
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X + 1 &&
                 posLocation.Y == location.Y - 1)
        {
            //NorthEast
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X - 1 &&
                 posLocation.Y == location.Y - 1)
        {
            //NorthWest
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X + 1 &&
                 posLocation.Y == location.Y + 1)
        {
            //SouthEast
            locations.push(posLocation);
        }
        else if (posLocation.X == location.X - 1 &&
                 posLocation.Y == location.Y + 1)
        {
            //SouthWest
            locations.push(posLocation);
        }
    }
    
    return locations;
}

module.exports = GetPathLocationsOptimized;