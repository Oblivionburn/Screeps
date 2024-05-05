const Task = require("object.Task");
const GetRoomToInvade = require("util.GetRoomToInvade");
const Claim = require("task.Claim");

function Claimer(creep)
{
    let task = null;
    
    if (creep.room.controller &&
        creep.room.controller.my)
    {
        roomName = GetRoomToInvade(creep.room);
        if (roomName != null)
        {
            task = new Task("Claim", roomName);
        }
    }
    else
    {
        task = new Task("Claim", creep.room.name);
    }
    
    if (task != null)
    {
        Claim(creep, task.Target);
    }
}

module.exports = Claimer;