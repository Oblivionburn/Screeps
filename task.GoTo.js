var Vector = require('Vector');

var GetDistance = require('util.GetDistance');
var Occupied = require('util.Occupied');
//var GetPath = require('util.GetPath');

function GoTo(creep, location, reason, debug) 
{
    var distance = GetDistance(creep.pos.x, creep.pos.y, location.X, location.Y);
    if (distance > 1)
    {
        //creep.memory.task = "Travelling";
        
        var color = "";
        if (reason == "Harvesting")
        {
            color = "#FFFFFF";
        }
        else if (reason == "Transfering")
        {
            reason = "Giving";
            color = "#33CC00";
        }
        else if (reason == "Building")
        {
            color = "#0000FF";
        }
        else if (reason == "Upgrading")
        {
            color = "#00FFFF";
        }
        else if (reason == "Grabbing" ||
                 reason == "Siphoning")
        {
            color = "#FFBF00";
        }
        else if (reason == "Repairing")
        {
            color = "#ff4d88";
        }
        else if (reason == "Attacking" ||
                 reason == "Invading")
        {
            color = "#FF0000";
        }
        
        if (debug)
        {
            creep.say(reason, true);
        }
        
        /*
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
                        okay = true;
                    }
                    else
                    {
                        needPath = true;
                    }
                }
                else
                {
                    needPath = true;
                }
            }
            else
            {
                needPath = true;
            }
        }
        else
        {
            needPath = true;
        }
        
        if (needPath)
        {
            var path = GetPath(creep, location);
            if (path != null)
            {
                if (path.length > 1)
                {
                    creep.memory.path = path;
                    okay = true;
                }
            }
        }
        
        if (okay)
        {
            var current = creep.memory.path[0];
            if (current.X == creep.pos.x &&
                current.Y == creep.pos.y)
            {
                var next = creep.memory.path[1];
                if (next != null)
                {
                    creep.memory.path.splice(1, 1);
                    creep.memory.path[0] = next;
                }
            }
            else
            {
                if (current.X > creep.pos.x)
                {
                    if (current.Y > creep.pos.y)
                    {
                        creep.move(BOTTOM_RIGHT);
                    }
                    else if (current.Y < creep.pos.y)
                    {
                        creep.move(TOP_RIGHT);
                    }
                    else if (current.Y == creep.pos.y)
                    {
                        creep.move(RIGHT);
                    }
                }
                else if (current.X < creep.pos.x)
                {
                    if (current.Y > creep.pos.y)
                    {
                        creep.move(BOTTOM_LEFT);
                    }
                    else if (current.Y < creep.pos.y)
                    {
                        creep.move(TOP_LEFT);
                    }
                    else if (current.Y == creep.pos.y)
                    {
                        creep.move(LEFT);
                    }
                }
                else if (current.X == creep.pos.x)
                {
                    if (current.Y > creep.pos.y)
                    {
                        creep.move(BOTTOM);
                    }
                    else if (current.Y < creep.pos.y)
                    {
                        creep.move(TOP);
                    }
                }
            }
        }
        */
        creep.moveTo(location.X, location.Y, {reusePath: 3, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;