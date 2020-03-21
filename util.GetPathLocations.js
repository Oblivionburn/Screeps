var Vector = require('Vector');
var Occupied = require('util.Occupied');

function GetPathLocations(creep, location) 
{
    var locations = [];
    
    var North = new Vector(location.X, location.Y - 1);
    if (!Occupied(creep, North))
    {
        locations.push(North);
    }
    
    var East = new Vector(location.X + 1, location.Y);
    if (!Occupied(creep, East))
    {
        locations.push(East);
    }
    
    var South = new Vector(location.X, location.Y + 1);
    if (!Occupied(creep, South))
    {
        locations.push(South);
    }
    
    var West = new Vector(location.X - 1, location.Y);
    if (!Occupied(creep, West))
    {
        locations.push(West);
    }
    
    var NorthEast = new Vector(location.X + 1, location.Y - 1);
    if (!Occupied(creep, NorthEast))
    {
        locations.push(NorthEast);
    }
    
    var NorthWest = new Vector(location.X - 1, location.Y - 1);
    if (!Occupied(creep, NorthWest))
    {
        locations.push(NorthWest);
    }
    
    var SouthEast = new Vector(location.X + 1, location.Y + 1);
    if (!Occupied(creep, SouthEast))
    {
        locations.push(SouthEast);
    }
    
    var SouthWest = new Vector(location.X - 1, location.Y + 1);
    if (!Occupied(creep, SouthWest))
    {
        locations.push(SouthWest);
    }
    
    return locations;
}

module.exports = GetPathLocations;