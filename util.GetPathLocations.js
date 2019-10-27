var Vector = require('Vector');
var Occupied = require('util.Occupied');

function GetPathLocations(creep, closed, location) 
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
    
    if (!Occupied(creep, North) &&
        !NorthFound)
    {
        locations.push(North);
    }
    
    if (!Occupied(creep, East) &&
        !EastFound)
    {
        locations.push(East);
    }
    
    if (!Occupied(creep, South) &&
        !SouthFound)
    {
        locations.push(South);
    }
    
    if (!Occupied(creep, West) &&
        !WestFound)
    {
        locations.push(West);
    }
    
    return locations;
}

module.exports = GetPathLocations;