function GetCreeps(room, job) 
{
    let creeps = [];
    
    if (job == "Injured")
    {
        creeps = room.find(FIND_MY_CREEPS, 
        {
            filter: (creep) => 
            {
                return (creep.hits < creep.hitsMax);
            }
        });
    }
    else
    {
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