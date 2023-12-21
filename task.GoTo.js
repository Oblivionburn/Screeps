/*
    Used by:
        task.Assault
        task.Build
        task.Flee
        task.Formation
        task.Harvest
        task.Repair
        task.Siphon
        task.Transfer
        task.Upgrade
        task.WaitNear
        task.Wander
*/

const GetDistance = require("util.GetDistance");

function GoTo(creep, position, reason) 
{
    const distance = GetDistance(creep.pos.x, creep.pos.y, position.X, position.Y);
    if (distance > 1)
    {
        let color = "";
        if (reason == "Harvesting")
        {
            color = "#FFFFFF";
        }
        else if (reason == "Transfering")
        {
            reason = "Giving";
            color = "#33CC00";
        }
        else if (reason == "Building" ||
                 reason == "Waiting")
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
            reason = "Taking";
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
        
        creep.say(reason, true);
        creep.moveTo(position.X, position.Y, {reusePath: 3, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;