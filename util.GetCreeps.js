function GetCreeps(room, job) 
{
    let creeps = [];
    
    switch (job)
    {
        case "Injured":
            creeps = room.find(FIND_MY_CREEPS, 
            {
                filter: (creep) => 
                {
                    return (creep.hits < creep.hitsMax);
                }
            });
            break;
            
        case "All":
            creeps = room.find(FIND_MY_CREEPS);
            break;
            
        default:
            creeps = room.find(FIND_MY_CREEPS, 
            {
                filter: (creep) => 
                {
                    return (creep.memory.job == job);
                }
            });
    }
    
    return creeps;
}

module.exports = GetCreeps;