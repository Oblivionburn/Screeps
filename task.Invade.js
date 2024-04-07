function Invade(creep, roomName) 
{
    creep.memory.task = "Invading";
    creep.memory.target = roomName;
    
    if (creep.room.name != roomName)
    {
        const exitDirection = creep.room.findExitTo(roomName);
        const exit = creep.pos.findClosestByRange(exitDirection);
        
        creep.say(creep.memory.task, true);
        creep.moveTo(exit, {reusePath: 3, visualizePathStyle: {stroke: "#FF0000"}});
    }
    else
    {
        
    }
}
    
module.exports = Invade;