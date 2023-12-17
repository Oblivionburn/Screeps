function GetStructures(room, name)
{
    let structures = [];
    
    if (name == "source")
    {
        structures = room.find(FIND_SOURCES);
    }
    else if (name == "spawn")
    {
        const allStructures = room.find(FIND_MY_STRUCTURES);
        const structureCount = allStructures.length;
    
        for (let i = 0; i < structureCount; i++)
        {
            const structure = allStructures[i];
            if (structure.structureType == STRUCTURE_SPAWN)
            {
                structures.push(structure);
            }
        }
    }
    else if (name == "extension")
    {
        const allStructures = room.find(FIND_MY_STRUCTURES);
        const structureCount = allStructures.length;
        
        for (let i = 0; i < structureCount; i++)
        {
            const structure = allStructures[i];
            if (structure.structureType == STRUCTURE_EXTENSION)
            {
                structures.push(structure);
            }
        }
    }
    else if (name == "tower")
    {
        const allStructures = room.find(FIND_MY_STRUCTURES);
        const structureCount = allStructures.length;
        
        for (let i = 0; i < structureCount; i++)
        {
            const structure = allStructures[i];
            if (structure.structureType == STRUCTURE_TOWER)
            {
                structures.push(structure);
            }
        }
    }
    else if (name == "site")
    {
        structures = room.find(FIND_MY_CONSTRUCTION_SITES);
    }
    else if (name == "flag")
    {
        structures = room.find(FIND_FLAGS);
    }

    return structures;
}

module.exports = GetStructures;