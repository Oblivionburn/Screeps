/*
    Used by:
        util.GetSiphonTarget
        util.GetSiteToBuild
        util.GetStructures_Damaged
*/

function Targeted(creep, id)
{
    for (let creepName in Game.creeps) 
    {
        const otherCreep = Game.creeps[creepName];
        if (otherCreep.id != creep.id)
        {
            if (otherCreep.memory.target == id) 
            {
                return true;
            }
        }
    }
    
    return false;
}

module.exports = Targeted;