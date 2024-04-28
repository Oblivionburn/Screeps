function GetConstructionSites(room, type) 
{
    switch (type)
    {
        case "container":
            return room.find(FIND_MY_CONSTRUCTION_SITES,
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_CONTAINER;
                }
            });
            
        case "storage":
            return room.find(FIND_MY_CONSTRUCTION_SITES,
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_STORAGE;
                }
            });
            
        case "extension":
            return room.find(FIND_MY_CONSTRUCTION_SITES,
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_EXTENSION;
                }
            });
            
        case "tower":
            return room.find(FIND_MY_CONSTRUCTION_SITES,
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_TOWER;
                }
            });
            
        case "spawn":
            return room.find(FIND_MY_CONSTRUCTION_SITES,
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_SPAWN;
                }
            });
    }
}

module.exports = GetConstructionSites;