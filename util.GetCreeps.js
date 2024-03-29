/*
    Used by:
        util.GetTransferTarget
        task.Formation
        util.GetInjured
*/

function GetCreeps(allCreeps, job) 
{
    const creeps = [];
    
    const creepCounts = allCreeps.length;
    
    if (job == "Injured")
    {
        for (let i = 0; i < creepCounts; i++)
        {
            const creep = allCreeps[i];
            if (creep.hits < creep.hitsMax)
            {
                creeps.push(creep);
            }
        }
    }
    else
    {
        for (let i = 0; i < creepCounts; i++)
        {
            const creep = allCreeps[i];
            if (creep.memory.job == job)
            {
                creeps.push(creep);
            }
        }
    }
    
    return creeps;
}

module.exports = GetCreeps;