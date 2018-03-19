function GetCreeps(room, role) 
{
    var creeps = [];
    
    creeps = room.find(FIND_MY_CREEPS, 
    {
        filter: (creep) => 
        {
            return (creep.memory.role == role || role == "All");
        }
    });
    
    return creeps;
}

module.exports = GetCreeps;