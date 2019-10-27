var GetPathLocationsOptimized = require('util.GetPathLocationsOptimized');
var GetPathMinLocationStart = require('util.GetPathMinLocationStart');

function GetPathOptimized(possible, destination) 
{
    var open = [];
    var closed = [];
    closed.push(possible[possible.length - 1]);
    
    var locations = GetPathLocationsOptimized(closed, possible, possible[possible.length - 1]);
    for (let l = 0; l < locations.length; l++)
    {
        open.push(locations[l]);
    }
    
    var reached = false;
    for (let i = 0; i < possible.length; i++)
    {
        if (open.length > 0)
        {
            var min = GetPathMinLocationStart(open);
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
                closed.unshift(min);
            }

            if (min.X == destination.X &&
                min.Y == destination.Y)
            {
                reached = true;
                break;
            }

            var locations = GetPathLocationsOptimized(closed, possible, min);
            for (let l = 0; l < locations.length; l++)
            {
                open.push(locations[l]);
            }
        }
        else
        {
            break;
        }
    }
    
    if (reached)
    {
        return closed;
    }
    
    return null;
}

module.exports = GetPathOptimized;