var GetDistance = require('util.GetDistance');
var UseNewPathFinding = require('task.UseNewPathFinding');

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

        //UseNewPathFinding(creep, location, true);
        creep.moveTo(location.X, location.Y, {reusePath: 3, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;