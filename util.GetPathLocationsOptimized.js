function GetPathLocationsOptimized(possible, location) 
{
    var locations = [];

    for (let p = 0; p < possible.length; p++)
    {
        if (possible[p].X == location.X && possible[p].Y == location.Y - 1)
        {
            //North
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X + 1 && possible[p].Y == location.Y)
        {
            //East
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X && possible[p].Y == location.Y + 1)
        {
            //South
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X - 1 && possible[p].Y == location.Y)
        {
            //West
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X + 1 && possible[p].Y == location.Y - 1)
        {
            //NorthEast
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X - 1 && possible[p].Y == location.Y - 1)
        {
            //NorthWest
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X + 1 && possible[p].Y == location.Y + 1)
        {
            //SouthEast
            locations.push(possible[p]);
        }
        else if (possible[p].X == location.X - 1 && possible[p].Y == location.Y + 1)
        {
            //SouthWest
            locations.push(possible[p]);
        }
    }
    
    return locations;
}

module.exports = GetPathLocationsOptimized;