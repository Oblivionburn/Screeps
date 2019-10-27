var Vector = require('Vector');
var ALocation = require('ALocation');

var GetDistance = require('util.GetDistance');
var GetTerrainCost = require('util.GetTerrainCost');
var GetPathOptimized = require('util.GetPathOptimized');
var GetPathLocations = require('util.GetPathLocations');
var GetPathMinLocationTarget = require('util.GetPathMinLocationTarget');

function GetPath(creep, destination) 
{
    var toTarget = GetDistance(creep.pos.x, creep.pos.y, destination.X, destination.Y);
    var toStart = 0;
    var terrainCost = 0;
    
    var start = new ALocation(creep.pos.x, creep.pos.y, toStart, toTarget, terrainCost);
    
    var open = [];
    var closed = [];
    closed.push(start);
    
    var locations = GetPathLocations(creep, closed, start);
    for (let l = 0; l < locations.length; l++)
    {
        toStart = GetDistance(locations[l].X, locations[l].Y, start.X, start.Y);
        toTarget = GetDistance(locations[l].X, locations[l].Y, destination.X, destination.Y);
        terrainCost = GetTerrainCost(creep.room, locations[l]);
        
        var location = new ALocation(locations[l].X, locations[l].Y, toStart, toTarget, terrainCost);
        open.push(location);
    }

    var reached = false;
    for (let i = 0; i < 500; i++)
    {
        if (open.length > 0)
        {
            var min = GetPathMinLocationTarget(open);
            for (let m = 0; m < open.length; m++)
            {
                if (open[m].X == min.X &&
                    open[m].Y == min.Y)
                {
                    open.splice(m, 1);
                    break;
                }
            }
            
            var stored = false;
            for (let c = 0; c < closed.length; c++)
            {
                if (closed[c].X == min.X &&
                    closed[c].Y == min.Y)
                {
                    stored = true;
                    break;
                }
            }
            
            if (!stored)
            {
                closed.push(min);
            }

            if (min.X == destination.X &&
                min.Y == destination.Y)
            {
                reached = true;
                break;
            }

            var locations = GetPathLocations(creep, closed, min);
            for (let l = 0; l < locations.length; l++)
            {
                toStart = GetDistance(locations[l].X, locations[l].Y, start.X, start.Y);
                toTarget = GetDistance(locations[l].X, locations[l].Y, destination.X, destination.Y);
                terrainCost = GetTerrainCost(creep.room, locations[l]);
                
                var location = new ALocation(locations[l].X, locations[l].Y, toStart, toTarget, terrainCost);
                open.push(location);
            }
        }
        else
        {
            break;
        }
    }
    
    if (reached)
    {
        return GetPathOptimized(closed, start);
    }

    return null;
}

module.exports = GetPath;