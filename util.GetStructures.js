function GetStructures(room, name)
{
    switch (name)
    {
        case "source":
            return room.find(FIND_SOURCES);
            
        case "spawn":
            return room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_SPAWN;
                }
            });
            
        case "extension":
            return room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_EXTENSION;
                }
            });
            
        case "container":
            return room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_CONTAINER;
                }
            });
            
        case "storage":
            return room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_STORAGE;
                }
            });
            
        case "tower":
            return room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return structure.structureType == STRUCTURE_TOWER;
                }
            });
            
        case "site":
            return room.find(FIND_MY_CONSTRUCTION_SITES);
            
        case "flag":
            return room.find(FIND_FLAGS);
    }
}

module.exports = GetStructures;