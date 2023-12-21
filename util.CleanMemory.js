/*
    Used by:
        util.SpawnCreep
*/

function CleanMemory() 
{
    for (let creepName in Memory.creeps) 
    {
        if (!Game.creeps[creepName]) 
        {
            delete Memory.creeps[creepName];
        }
    }
}

module.exports = CleanMemory;