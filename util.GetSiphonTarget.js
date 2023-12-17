const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearest = require("util.GetNearest");

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
    
    const positions = [];
    for (let i = 0; i < extensionCount; i++)
    {
        const extension = extensions[i];
        
        const position = new Position(extension.pos.x, extension.pos.y);
        
        if (!Targeted(creep, extension.id))
        {
            positions.push(position);
        }
    }
    
    if (positions.length > 0)
    {
        const nearest = GetNearest(creep.pos.x, creep.pos.y, positions);
        
        for (let i = 0; i < extensionCount; i++)
        {
            const extension = extensions[i];
            
            if (extension.pos.x == nearest.X &&
                extension.pos.y == nearest.Y)
            {
                return extension;
            }
        }
    }
        
    return null;
}

module.exports = GetSiphonTarget;