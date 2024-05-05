const CanBuild = require("util.CanBuild");
const GetError = require("util.GetError");

function Build(room, position, type)
{
    if (CanBuild(room, position.X, position.Y))
    {
        let result = 1
        if (type == STRUCTURE_SPAWN)
        {
            result = room.createConstructionSite(position.X, position.Y, type, "HQ_" + room.name);
        }
        else
        {
            result = room.createConstructionSite(position.X, position.Y, type);
        }
        
        if (result == 0)
        {
            console.log("Building " + type + ": " + position.X + "," + position.Y);
        }
        else
        {
            console.log("Error building " + type + " in room " + room.name + " at " + position.X + "," + position.Y + ": " + GetError(result));
        }
        
        return true;
    }
    
    return false;
}

module.exports = Build;