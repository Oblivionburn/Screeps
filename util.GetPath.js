var ALocation = require('ALocation');

var HasPath = require('util.HasPath');
var GetDistance = require('util.GetDistance');
var GetTerrainCost = require('util.GetTerrainCost');
var GetPathOptimized = require('util.GetPathOptimized');
var GetPathLocations = require('util.GetPathLocations');
var GetPathMinLocationTarget = require('util.GetPathMinLocationTarget');
var GetPathReached = require('util.GetPathReached');

function GetPath(creep, destination, debug) 
{
    //Init starting point
    var toTarget = GetDistance(creep.pos.x, creep.pos.y, destination.X, destination.Y);
    var toStart = 0;
    var terrainCost = 0;
    
    var start = new ALocation(creep.pos.x, creep.pos.y, toStart, toTarget, terrainCost);
    
    var open = [];
    var path = [];
    
    //Add our starting point to the path
    
    if (debug)
    {
        console.log(creep.name + ': New path starting point is (' + start.X + ',' + start.Y + ')');
    }
    
    path.push(start);
    
    //Get possible next steps towards the target
    var locations = GetPathLocations(creep, start);
    for (let l = 0; l < locations.length; l++)
    {
        toStart = GetDistance(locations[l].X, locations[l].Y, start.X, start.Y);
        toTarget = GetDistance(locations[l].X, locations[l].Y, destination.X, destination.Y);
        terrainCost = GetTerrainCost(creep.room, locations[l]);
        
        var location = new ALocation(locations[l].X, locations[l].Y, toStart, toTarget, terrainCost);
        open.push(location);
    }

    var reached = false;
    for (let i = 0; i < 250; i++) //width * height of room = 250
    {
        if (open.length > 0)
        {
            if (debug)
            {
                console.log(creep.name + ': path possibilities found...');
            }
            
            //Get closest possibility towards the target
            var min = GetPathMinLocationTarget(open);
            
            if (debug)
            {
                console.log(creep.name + ': Next step in path is (' + min.X + ',' + min.Y + ')');
            }
            
            //Clear options being checked so we don't add duplicates next time around
            open = [];
            
            //Add next step to our path
            path.push(min);

            //Check if we've reached our goal
            if (GetPathReached(min, destination))
            {
                if (debug)
                {
                    console.log(creep.name + ': Reached destination');
                }
                
                reached = true;
                break;
            }

            //Get possible next steps towards the target
            var locations = GetPathLocations(creep, min);
            for (let l = 0; l < locations.length; l++)
            {
                //Check that we're not trying to add anything already in our path
                if (!HasPath(path, locations[l].X, locations[l].Y))
                {
                    toStart = GetDistance(locations[l].X, locations[l].Y, start.X, start.Y);
                    toTarget = GetDistance(locations[l].X, locations[l].Y, destination.X, destination.Y);
                    terrainCost = GetTerrainCost(creep.room, locations[l]);
                    
                    var location = new ALocation(locations[l].X, locations[l].Y, toStart, toTarget, terrainCost);
                    open.push(location);
                }
            }
        }
        else
        {
            if (debug)
            {
                console.log(creep.name + ': ran out of path possibilities!');
            }
            
            break;
        }
    }
    
    if (reached)
    {
        if (debug)
        {
            console.log(creep.name + ': Getting optimized path...');
        }
        
        return GetPathOptimized(creep, path, start, debug);
    }

    return null;
}

module.exports = GetPath;