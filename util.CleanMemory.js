function CleanMemory() 
{
    for (var name in Memory.creeps) 
    {
        if (!Game.creeps[name]) 
        {
            delete Memory.creeps[name];
        }
    }
}

module.exports = CleanMemory;