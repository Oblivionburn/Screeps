const GetDistance = require("util.GetDistance");

function GoTo(creep, position, roomName, reason) 
{
    const distance = GetDistance(creep.pos.x, creep.pos.y, position.X, position.Y);
    if (distance > 1)
    {
        let color = "";
        switch (reason)
        {
            case "Harvesting":
                color = "#FFFFFF";
                break;
                
            case "Transfering":
                reason = "Giving";
                color = "#33CC00";
                break;
                
            case "Building":
                color = "#0000FF";
                break;
                
            case "Upgrading":
                color = "#00FFFF";
                break;
                
            case "Grabbing":
            case "Siphoning":
                reason = "Taking";
                color = "#FFBF00";
                break;
                
            case "Repairing":
                color = "#ff4d88";
                break;
                
            case "Attacking":
            case "Claiming":
            case "Invading":
                color = "#FF0000";
                break;
        }
        
        creep.say(reason, true);
        creep.moveTo(new RoomPosition(position.X, position.Y, roomName), {reusePath: 3, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;