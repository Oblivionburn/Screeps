const Targeted = require("util.Targeted");

function GetCreeps_ToGuard(creep, jobsFilter) 
{
    return creep.room.find(FIND_MY_CREEPS, 
    {
        filter: (otherCreep) => 
        {
            return otherCreep.id != creep.id &&
                   !jobsFilter.includes(otherCreep.memory.job) &&
                   !Targeted(creep, otherCreep.id);
        }
    });
}

module.exports = GetCreeps_ToGuard;