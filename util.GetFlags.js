/*
    Used by:
        util.GetHostile
*/

function GetFlags(room, name)
{
    const flags = [];
    
    const allFlags = room.find(FIND_FLAGS);
    const flagCount = allFlags.length;
    
    for (let i = 0; i < flagCount; i++)
    {
        const flag = allFlags[i];
        if (flag.name == name)
        {
            flags.push(flag);
        }
    }
    
    return flags;
}

module.exports = GetFlags;