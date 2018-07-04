var GetDistance = require('util.GetDistance');

function GoTo(creep, location, reason, debug) 
{
    var distance = GetDistance(creep.pos.x, creep.pos.y, location.X, location.Y);
    if (distance > 1)
    {
        creep.memory.task = "Travelling";
        
        var color = "";
        if (reason == "Harvesting")
        {
            color = "#FFFFFF";
        }
        else if (reason == "Transfering")
        {
            color = "#00FF00";
        }
        else if (reason == "Building")
        {
            color = "#000000";
        }
        else if (reason == "Upgrading")
        {
            color = "#00FFFF";
        }
        else if (reason == "Grabbing" ||
                 reason == "Siphoning")
        {
            color = "#CC9900";
        }
        else if (reason == "Repairing")
        {
            color = "#9933FF";
        }
        else if (reason == "Attacking" ||
                 reason == "Invading")
        {
            color = "#FF0000";
        }
        
        if (debug)
        {
            creep.say(reason, false);
        }
        
        creep.moveTo(location.X, location.Y, {reusePath: 3, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;