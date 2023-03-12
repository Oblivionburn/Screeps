var ALocation = require('ALocation');
var Occupied = require('util.Occupied');

function GetPathLocations(creep, location) 
{
    var locations = [];
    
    var North = new ALocation(location.X, location.Y - 1);
    if (!Occupied(creep, North))
    {
        locations.push(North);
    }
    
    var East = new ALocation(location.X + 1, location.Y);
    if (!Occupied(creep, East))
    {
        locations.push(East);
    }
    
    var South = new ALocation(location.X, location.Y + 1);
    if (!Occupied(creep, South))
    {
        locations.push(South);
    }
    
    var West = new ALocation(location.X - 1, location.Y);
    if (!Occupied(creep, West))
    {
        locations.push(West);
    }
    
    var NorthEast = new ALocation(location.X + 1, location.Y - 1);
    if (!Occupied(creep, NorthEast))
    {
        locations.push(NorthEast);
    }
    
    var NorthWest = new ALocation(location.X - 1, location.Y - 1);
    if (!Occupied(creep, NorthWest))
    {
        locations.push(NorthWest);
    }
    
    var SouthEast = new ALocation(location.X + 1, location.Y + 1);
    if (!Occupied(creep, SouthEast))
    {
        locations.push(SouthEast);
    }
    
    var SouthWest = new ALocation(location.X - 1, location.Y + 1);
    if (!Occupied(creep, SouthWest))
    {
        locations.push(SouthWest);
    }
    
    return locations;
}

module.exports = GetPathLocations;