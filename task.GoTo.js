const GetDistance = require("util.GetDistance");

function GoTo(creep, position, roomName, reason) 
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
                 reason == "Claiming" ||
                 reason == "Invading")
        {
            color = "#FF0000";
        }
        
        creep.say(reason, true);
        creep.moveTo(new RoomPosition(position.X, position.Y, roomName), {reusePath: 3, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;