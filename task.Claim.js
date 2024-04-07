function Claim(creep, roomName) 
{
    creep.memory.task = "Claiming";
    creep.memory.target = roomName;
    
    if (creep.room.name != roomName)
    {
        const exitDirection = creep.room.findExitTo(roomName);
        const exit = creep.pos.findClosestByRange(exitDirection);
        
        creep.say(creep.memory.task, true);
        creep.moveTo(exit, {reusePath: 3, visualizePathStyle: {stroke: "#FF0000"}});
    }
    else if (!creep.room.controller.my)
    {
        const result = creep.claimController(creep.room.controller);
        if (result == ERR_NOT_IN_RANGE)
        {
            const position = new Position(creep.room.controller.pos.x, creep.room.controller.pos.y);
            GoTo(creep, position, roomName, creep.memory.task);
        }
    }
}
    
module.exports = Claim;