function GetCreeps(room, job) 
{
    switch (job)
    {
        case "Injured":
            return room.find(FIND_MY_CREEPS, 
            {
                filter: (creep) => 
                {
                    return (creep.hits < creep.hitsMax);
                }
            });
            
        case "All":
            return room.find(FIND_MY_CREEPS);
            
        default:
            return room.find(FIND_MY_CREEPS, 
            {
                filter: (creep) => 
                {
                    return (creep.memory.job == job);
                }
            });
    }
}

module.exports = GetCreeps;