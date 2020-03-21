function GetStructures(room, structure, checkEnergy)
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
                if (checkEnergy)
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.store[RESOURCE_ENERGY] > 0;
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.energy > 0;
                    }
                }
                else
                {
                    return structure.structureType == STRUCTURE_SPAWN;
                }
            }
        });
    }
    else if (structure == "Extension")
    {
        sites = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                if (checkEnergy)
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.store[RESOURCE_ENERGY] > 0;
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.energy > 0;
                    }
                }
                else
                {
                    return structure.structureType == STRUCTURE_EXTENSION;
                }
            }
        });
    }
    else if (structure == "Tower")
    {
        sites = room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                if (checkEnergy)
                {
                    if (structure.store != null)
                    {
                        return (structure.structureType == STRUCTURE_TOWER) 
                            && structure.store.getFreeCapacity(RESOURCE_ENERGY);
                    }
                    else
                    {
                        return (structure.structureType == STRUCTURE_TOWER) 
                            && structure.energy < structure.energyCapacity;
                    }
                }
                else
                {
                    return structure.structureType == STRUCTURE_TOWER;
                }
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