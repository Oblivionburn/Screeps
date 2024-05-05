function GetCreeps_Other(creep, jobsFilter) 
{
    return creep.room.find(FIND_MY_CREEPS, 
    {
        filter: (otherCreep) => 
        {
            return otherCreep.id != creep.id &&
                   (!jobsFilter || !jobsFilter.includes(otherCreep.memory.job));
        }
    });
}

module.exports = GetCreeps_Other;