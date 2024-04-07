const GetStructures_Damaged = require("util.GetStructures_Damaged");

function GetRepairTarget(creep)
{
    const names = ["spawn", "extension", "tower", "road", "rampart", "wall"];
    const count = names.length;
    
    for (let i = 0; i < count; i++)
    {
        const name = names[i];
        
        const structure = GetStructures_Damaged(creep, name);
        if (structure != null)
        {
            return structure;
        }
    }
    
    return null;
}

module.exports = GetRepairTarget;