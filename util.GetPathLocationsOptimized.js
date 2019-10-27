var Vector = require('Vector');
var Occupied = require('util.Occupied');

function GetPathLocationsOptimized(closed, possible, location) 
{
    var locations = [];
    
    var North = new Vector(location.X, location.Y - 1);
    var East = new Vector(location.X + 1, location.Y);
    var South = new Vector(location.X, location.Y + 1);
    var West = new Vector(location.X - 1, location.Y);
    
    var NorthFound = false;
    var EastFound = false;
    var SouthFound = false;
    var WestFound = false;
            
    for (let c = 0; c < closed.length; c++)
    {
        if (North.X == closed[c].X &&
            North.Y == closed[c].Y)
        {
            NorthFound = true;
        }
        
        if (East.X == closed[c].X &&
            East.Y == closed[c].Y)
        {
            EastFound = true;
        }
        
        if (South.X == closed[c].X &&
            South.Y == closed[c].Y)
        {
            SouthFound = true;
        }
        
        if (West.X == closed[c].X &&
            West.Y == closed[c].Y)
        {
            WestFound = true;
        }
    }
    
    if (!NorthFound)
    {
        for (let p = 0; p < possible.length; p++)
        {
            if (North.X == possible[p].X &&
                North.Y == possible[p].Y)
            {
                locations.push(North);
                break;
            }
        }
    }
    
    if (!EastFound)
    {
        for (let p = 0; p < possible.length; p++)
        {
            if (East.X == possible[p].X &&
                East.Y == possible[p].Y)
            {
                locations.push(East);
                break;
            }
        }
    }
    
    if (!SouthFound)
    {
        for (let p = 0; p < possible.length; p++)
        {
            if (South.X == possible[p].X &&
                South.Y == possible[p].Y)
            {
                locations.push(South);
                break;
            }
        }
    }
    
    if (!WestFound)
    {
        for (let p = 0; p < possible.length; p++)
        {
            if (West.X == possible[p].X &&
                West.Y == possible[p].Y)
            {
                locations.push(West);
                break;
            }
        }
    }
    
    return locations;
}

module.exports = GetPathLocationsOptimized;