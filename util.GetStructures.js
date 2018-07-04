function GetStructures(room, structure)
{
    var sites = [];
    if (structure == "Source")
    {
        sites = room.find(FIND_SOURCES);
    }
    else if (structure == "Spawn")
    {
        sites = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_SPAWN) && structure.energy > 0;
            }
        });
    }
    else if (structure == "Extension")
    {
        sites = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_EXTENSION) && structure.energy > 0;
            }
        });
    }
    else if (structure == "Tower")
    {
        sites = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
            }
        });
    }
    else if (structure == "Site")
    {
        sites = room.find(FIND_MY_CONSTRUCTION_SITES);
    }
    else if (structure == "Flag")
    {
        sites = room.find(FIND_FLAGS);
    }

    if (sites.length > 0) 
    {
        return sites;
    }
    
    return null;
}

module.exports = GetStructures;