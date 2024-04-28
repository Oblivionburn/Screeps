const Targeted = require("util.Targeted");
const GetNearestThing = require("util.GetNearestThing");
const Position = require("object.Position");

function GetSiphonTarget(creep)
{
    const containers = creep.room.find(FIND_MY_STRUCTURES, 
    {
        filter: (structure) => 
        {
            return structure.structureType == STRUCTURE_CONTAINER
                && structure.store[RESOURCE_ENERGY] > 0;
        }
    });
    
    const storages = creep.room.find(FIND_MY_STRUCTURES, 
    {
        filter: (structure) => 
        {
            return structure.structureType == STRUCTURE_STORAGE
                && structure.store[RESOURCE_ENERGY] > 0;
        }
    });
    
    const extensions = creep.room.find(FIND_MY_STRUCTURES, 
    {
        filter: (structure) => 
        {
            return structure.structureType == STRUCTURE_EXTENSION
                && structure.store[RESOURCE_ENERGY] > 0;
        }
    });
    
    const available = [];
    const containersCount = containers.length;
    const storageCount = storages.length;
    const extensionCount = extensions.length;
    
    if (containersCount > 0)
    {
        for (let i = 0; i < containersCount; i++)
        {
            const container = containers[i];
            
            if (!Targeted(creep, container.id))
            {
                available.push(container);
            }
        }
    }
    else if (storageCount > 0)
    {
        for (let i = 0; i < storageCount; i++)
        {
            const storage = storages[i];
            
            if (!Targeted(creep, storage.id))
            {
                available.push(storage);
            }
        }
    }
    else if (extensionCount > 0)
    {
        for (let i = 0; i < extensionCount; i++)
        {
            const extension = extensions[i];
            
            if (!Targeted(creep, extension.id))
            {
                available.push(extension);
            }
        }
    }
    
    if (available.length > 0)
    {
        return GetNearestThing(creep.pos.x, creep.pos.y, available);
    }
        
    return null;
}

module.exports = GetSiphonTarget;