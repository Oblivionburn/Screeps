function GetJobCounts(room, jobs)
{
    const jobCounts = {};
    
    const creeps = room.find(FIND_MY_CREEPS);
    const creepsCount = creeps.length;
    
    //Init job list
    for (let i = 0; i < jobs.length; i++)
    {
        const job = jobs[i];
        jobCounts[job] = 0;
    }
    
    //Get increment counts of jobs
    for (let i = 0; i < creepsCount; i++)
    {
        const creep = creeps[i];
        if (jobs.includes(creep.memory.job))
        {
            jobCounts[creep.memory.job]++;
        }
    }
    
    return jobCounts;
}

module.exports = GetJobCounts;