const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearest = require("util.GetNearest");

function GetStructures_Damaged(creep, name)
{
    let structures = [];
    
    if (name == "spawn")
    {
        structures = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_SPAWN) 
                        && structure.hits < structure.hitsMax;
                
            }
        });
    }
    else if (name == "extension")
    {
        structures = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_EXTENSION) 
                        && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (name == "tower")
    {
        structures = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_TOWER) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (name == "road")
    {
        structures = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_ROAD) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (name == "wall")
    {
        structures = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_WALL) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }
    else if (name == "rampart")
    {
        structures = creep.room.find(FIND_MY_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_RAMPART) 
                    && structure.hits < structure.hitsMax;
            }
        });
    }

    const structureCount = structures.length;
    
    if (name == "spawn" ||
        name == "extension" ||
        name == "wall" ||
        name == "rampart")
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