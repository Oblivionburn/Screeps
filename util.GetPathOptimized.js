var HasPath = require('util.HasPath');
var RemovePath = require('util.RemovePath');
var GetPathReached = require('util.GetPathReached');
var GetPathMinLocationStart = require('util.GetPathMinLocationStart');
var GetPathLocationsOptimized = require('util.GetPathLocationsOptimized');

//Get the path in reverse to weed out unnecessary steps or sidetracking
function GetPathOptimized(creep, possible, start, debug) 
{
    var open = [];
    var path = [];
    
    //Start with the end of the path
    var target = possible[possible.length - 1];
    path.push(target);
    
    if (debug)
    {
        console.log(creep.name + ': First in optimized path is (' + target.X + ',' + target.Y + ')');
    }
    
    //Get possible next steps back towards the start
    var locations = GetPathLocationsOptimized(possible, target);
    for (let l = 0; l < locations.length; l++)
    {
        open.push(locations[l]);
    }
    
    var reached = false;
    var max = possible.length;
    for (let i = 0; i < max; i++)
    {
        if (debug)
        {
            console.log(creep.name + ': checking possibility ' + i + '/' + max);
        }
        
        if (open.length > 0)
        {
            if (debug)
            {
                console.log(creep.name + ': optimized path possibilities found...');
            }
            
            //Get closest possibility towards the start
            var min = GetPathMinLocationStart(open);
            
            if (debug)
            {
                console.log(creep.name + ': Next step in path is (' + min.X + ',' + min.Y + ')');
            }
            
            //Clear options being checked so we don't add duplicates next time around
            open = [];
            
            //Remove next step from the possibilities so we don't waste CPU re-checking it 
            //and so we don't try to run over the same ground twice
            possible = RemovePath(possible, min.X, min.Y);
            
            if (debug)
            {
                console.log(creep.name + ': new possibility count is ' + possible.length);
            }
            
            //Add next step to our path
            path.unshift(min);

            //Check if we've reached our goal
            if (GetPathReached(min, start))
            {
                if (debug)
                {
                    console.log(creep.name + ': Reached optimized destination');
                }
                
                reached = true;
                break;
            }

            //Get possible next steps back towards the start
            var locations = GetPathLocationsOptimized(possible, min);
            for (let l = 0; l < locations.length; l++)
            {
                //Check that we're not trying to add anything already in our path
                if (!HasPath(path, locations[l].X, locations[l].Y))
                {
                    open.push(locations[l]);
                }
            }
        }
        else
        {
            if (debug)
            {
                console.log(creep.name + ': ran out of optimized path possibilities!');
            }
            
            break;
        }
    }
    
    if (reached)
    {
        if (debug)
        {
            console.log(creep.name + ': Returning optimized path...');
        }
        
        return path;
    }
    
    return null;
}

module.exports = GetPathOptimized;