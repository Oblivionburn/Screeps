const GetDistance = require("util.GetDistance");
const GetError = require("util.GetError");

function GoTo(creep, position, roomName, reason) 
{
    const distance = GetDistance(creep.pos.x, creep.pos.y, position.X, position.Y);
    if (distance > 1)
    {
        let color = "";
        switch (reason)
        {
            case "Harvesting":
                color = "#FFFFFF"; //White
                break;
                
            case "Transfering":
                reason = "Giving";
                color = "#00FF00"; //Green
                break;
                
            case "Building":
                color = "#0000FF"; //Blue
                break;
                
            case "Upgrading":
                color = "#00FFFF"; //Cyan
                break;
                
            case "Grabbing":
            case "Siphoning":
                reason = "Taking";
                color = "#FFFF00"; //Yellow
                break;
                
            case "Repairing":
                color = "#FF00FF"; //Magenta
                break;
                
            case "Guarding":
                color = "#000000"; //Black
                break;
                
            case "Attacking":
            case "Claiming":
            case "Invading":
                color = "#FF0000"; //Red
                break;
        }
        
        creep.say(reason, true);
        creep.moveTo(position.X, position.Y, {reusePath: 10, visualizePathStyle: {stroke: color}});
    }
}

module.exports = GoTo;