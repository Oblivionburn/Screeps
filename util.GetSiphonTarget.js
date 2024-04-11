const Targeted = require("util.Targeted");
const GetNearestThing = require("util.GetNearestThing");
const Position = require("object.Position");

function GetSiphonTarget(creep)
{
    const extensions = creep.room.find(FIND_MY_STRUCTURES, 
    {
        filter: (structure) => 
        {
            return (structure.structureType == STRUCTURE_EXTENSION) && structure.store[RESOURCE_ENERGY] > 0;
        }
    });
    
    const extensionCount = extensions.length;
    
    const availableExtensions = [];
    for (let i = 0; i < extensionCount; i++)
    {
        const extension = extensions[i];
        
        if (!Targeted(creep, extension.id))
        {
            availableExtensions.push(extension);
        }
    }
    
    if (availableExtensions.length > 0)
    {
        return GetNearestThing(creep.pos.x, creep.pos.y, availableExtensions);
    }
        
    return null;
}

module.exports = GetSiphonTarget;