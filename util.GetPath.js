var ALocation = require('ALocation');

var HasPath = require('util.HasPath');
var GetDistance = require('util.GetDistance');
var GetTerrainCost = require('util.GetTerrainCost');
var GetPathOptimized = require('util.GetPathOptimized');
var GetPathLocations = require('util.GetPathLocations');
var GetPathMinLocationTarget = require('util.GetPathMinLocationTarget');
var GetPathReached = require('util.GetPathReached');

function GetPath(creep, destination) 
{
    var open = [];
    var path = [];

    var start = new ALocation(creep.pos.x, creep.pos.y);
    start.ToTarget = GetDistance(creep.pos.x, creep.pos.y, destination.X, destination.Y);
    path.push(start);
    
    var lastMin = start;

    var reached = false;
    for (let i = 0; i < 250; i++) //width * height of room = 250
    {
        if (lastMin != null)
        {
            var locations = GetPathLocations(creep, lastMin);
            var count = locations.length;
            for (let l = 0; l < count; l++)
            {
                var location = locations[l];
                
                if (!HasPath(path, location))
                {
                    location.ToStart = GetDistance(location.X, location.Y, start.X, start.Y);
                    location.ToTarget = GetDistance(location.X, location.Y, destination.X, destination.Y);
                    location.TerrainCost = GetTerrainCost(creep.room, locations[l]);
                    location.Parent = lastMin;
                    
                    open.push(location);
                }
            }
            
            if (open.length > 0)
            {
                var min = GetPathMinLocationTarget(open);
                open = [];
                path.push(min);
                lastMin = min;
                
                if (GetPathReached(min, destination))
                {
                    reached = true;
                    break;
                }
            }
            else
            {
                lastMin = lastMin.Parent;
            }
        }
        else
        {
            break;
        }
    }
    
    if (reached)
    {
        return GetPathOptimized(creep, path, start);
    }

    return null;
}

module.exports = GetPath;