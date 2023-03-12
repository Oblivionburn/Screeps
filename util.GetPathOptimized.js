var HasPath = require('util.HasPath');
var RemovePath = require('util.RemovePath');
var GetPathReached = require('util.GetPathReached');
var GetPathMinLocationStart = require('util.GetPathMinLocationStart');
var GetPathLocationsOptimized = require('util.GetPathLocationsOptimized');

function GetPathOptimized(creep, possible, start) 
{
    var open = [];
    var path = [];
    
    var target = possible[possible.length - 1];
    path.push(target);
    
    var lastMin = target;
    
    var reached = false;
    var max = possible.length;
    for (let i = 0; i < max; i++)
    {
        var locations = GetPathLocationsOptimized(possible, lastMin);
        var count = locations.length;
        for (let l = 0; l < count; l++)
        {
            var location = locations[l];
            if (!HasPath(path, location))
            {
                open.push(locations[l]);
            }
        }
            
        if (open.length > 0)
        {
            var min = GetPathMinLocationStart(open);
            open = [];
            possible = RemovePath(possible, min.X, min.Y);
            path.unshift(min);
            lastMin = min;
            
            if (GetPathReached(min, start))
            {
                reached = true;
                break;
            }
        }
        else
        {
            break;
        }
    }
    
    if (reached)
    {
        return path;
    }
    
    return null;
}

module.exports = GetPathOptimized;