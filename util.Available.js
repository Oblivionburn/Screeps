function Available(creep, target) 
{
    for (var name in Game.creeps) 
    {
        var creeper = Game.creeps[name];
        if (creeper.id != creep.id)
        {
            if (creeper.memory.target == target) 
            {
                return false;
            }
        }
    }
    
    return true;
}

module.exports = Available;