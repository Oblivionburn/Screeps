/*
    Used by:
        util.GetRepairTarget
*/

const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearest = require("util.GetNearest");

function GetStructures_Damaged(creep, type)
{
    const structures = [];
    
    let allStructures = [];
    
    if (type == STRUCTURE_ROAD ||
        type == STRUCTURE_WALL)
    {
        allStructures = creep.room.find(FIND_STRUCTURES);
    }
    else
    {
        allStructures = creep.room.find(FIND_MY_STRUCTURES);
    }
    
    const allStructureCount = allStructures.length;
    
    for (let i = 0; i < allStructureCount; i++)
    {
        const structure = allStructures[i];
        
        if (structure.hits < structure.hitsMax &&
            structure.structureType == type)
        {
            structures.push(structure);
        }
    }
    
    const structureCount = structures.length;
    
    if (type == STRUCTURE_SPAWN ||
        type == STRUCTURE_EXTENSION ||
        type == STRUCTURE_WALL ||
        type == STRUCTURE_RAMPART)
    {
        let chosen = null;
        
        //Get structure with lowest hits
        
        for (let i = 0; i < structureCount; i++)
        {
            const structure = structures[i];
            
            if (!Targeted(creep, structure.id))
            {
                chosen = structure;
                break;
            }
        }
        
        if (chosen != null)
        {
            let hp = chosen.hits;
            
            for (let i = 0; i < structureCount; i++)
            {
                const structure = structures[i];
                
                if (structure.hits < hp &&
                    !Targeted(creep, structure.id))
                {
                    hp = structure.hits;
                    chosen = structure;
                }
            }
        }
        
        return chosen;
    }
    else
    {
        //Get nearest structure
        const positions = [];
        
        for (let i = 0; i < structureCount; i++)
        {
            const structure = structures[i];
            
            if (!Targeted(creep, structure.id))
            {
                positions.push(new Position(structure.pos.x, structure.pos.y));
            }
        }
        
        if (positions.length > 0)
        {
            const nearest = GetNearest(creep.pos.x, creep.pos.y, positions);
            
            for (let i = 0; i < structureCount; i++)
            {
                const structure = structures[i];
                
                if (structure.pos.x == nearest.X &&
                    structure.pos.y == nearest.Y)
                {
                    return structure;
                }
            }
        }
    }
    
    return null;    
}

module.exports = GetStructures_Damaged;