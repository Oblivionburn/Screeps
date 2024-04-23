function GetCreeps_Other(creep) 
{
    return creep.room.find(FIND_MY_CREEPS, 
    {
        filter: (otherCreep) => 
        {
            return (otherCreep.id != creep.id);
        }
    });
}

module.exports = GetCreeps_Other;