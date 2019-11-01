function GetCreeps(room, role) 
{
    var creeps = [];
    
    if (role == "Injured")
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
                return (creep.memory.role == role || role == "All");
            }
        });
    }
    
    return creeps;
}

module.exports = GetCreeps;