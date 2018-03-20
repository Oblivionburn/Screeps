function CleanMemory() 
{
    for (var name in Memory.creeps) 
    {
        if (!Game.creeps[name]) 
        {
            console.log(name + " has died.");
            delete Memory.creeps[name];
        }
    }
}

module.exports = CleanMemory;