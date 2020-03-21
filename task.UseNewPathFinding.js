var Vector = require('Vector');

var Occupied = require('util.Occupied');
var GetPath = require('util.GetPath');

function UseNewPathFinding(creep, location) 
{
    var debug = false;
    
    var okay = false;
    var needPath = false;
    
    if (creep.memory.path != null)
    {
        if (creep.memory.path.length > 1)
        {
            var next = creep.memory.path[1];
            if (next != null)
            {
                var location = new Vector(next.X, next.Y);
                if (!Occupied(creep, location))
                {
                    if (debug)
                    {
                        console.log(creep.name + ': Path Found');
                    }
                    
                    okay = true;
                }
                else if (debug)
                {
                    console.log(creep.name + ': Next step is occupied');
                }
            }
            else if (debug)
            {
                console.log(creep.name + ': Next step not found');
            }
        }
        else if (debug)
        {
            console.log(creep.name + ': Path is 0 length');
        }
    }
    else if (debug)
    {
        console.log(creep.name + ': Path is null');
    }
    
    if (!okay)
    {
        if (debug)
        {
            console.log(creep.name + ': Getting new path...');
        }
        
        //Get new path
        var new_path = GetPath(creep, location);
        if (new_path != null)
        {
            if (new_path.length > 1)
            {
                creep.memory.path = new_path;
                
                if (debug)
                {
                    console.log(creep.name + ': New Path');
                }
                
                okay = true;
            }
        }
        else if (debug)
        {
            console.log(creep.name + ': Path is still null');
        }
    }
    
    if (okay)
    {
        var next = creep.memory.path[1];
        if (next != null)
        {
            creep.memory.path.splice(1, 1);
            creep.memory.path[0] = next;
            
            if (debug)
            {
                console.log(creep.name + ': Next Step is (' + next.X + ',' + next.Y + ')');
            }
            
            if (next.X > creep.pos.x)
            {
                if (next.Y > creep.pos.y)
                {
                    creep.move(BOTTOM_RIGHT);
                }
                else if (next.Y < creep.pos.y)
                {
                    creep.move(TOP_RIGHT);
                }
                else if (next.Y == creep.pos.y)
                {
                    creep.move(RIGHT);
                }
            }
            else if (next.X < creep.pos.x)
            {
                if (next.Y > creep.pos.y)
                {
                    creep.move(BOTTOM_LEFT);
                }
                else if (next.Y < creep.pos.y)
                {
                    creep.move(TOP_LEFT);
                }
                else if (next.Y == creep.pos.y)
                {
                    creep.move(LEFT);
                }
            }
            else if (next.X == creep.pos.x)
            {
                if (next.Y > creep.pos.y)
                {
                    creep.move(BOTTOM);
                }
                else if (next.Y < creep.pos.y)
                {
                    creep.move(TOP);
                }
            }
        }
    }
}

module.exports = UseNewPathFinding;