function GetStructures(room, name)
{
    let structures = [];
    
    if (name == "source")
    {
        structures = room.find(FIND_SOURCES);
    }
    else if (name == "spawn")
    {
        structures = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return structure.structureType == STRUCTURE_SPAWN;
            }
        });
    }
    else if (name == "extension")
    {
        structures = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return structure.structureType == STRUCTURE_EXTENSION;
            }
        });
    }
    else if (name == "tower")
    {
        structures = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return structure.structureType == STRUCTURE_TOWER;
            }
        });
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