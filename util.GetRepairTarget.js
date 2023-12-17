const GetStructures_Damaged = require("util.GetStructures_Damaged");

function GetRepairTarget(creep)
{
    const types = [STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_TOWER, STRUCTURE_ROAD, STRUCTURE_RAMPART, STRUCTURE_WALL];
    const typeCount = types.length;
    
    for (let i = 0; i < typeCount; i++)
    {
        const type = types[i];
        
        const structure = GetStructures_Damaged(creep, type);
        if (structure != null)
        {
            return structure;
        }
    }
    
    return null;
}

module.exports = GetRepairTarget;