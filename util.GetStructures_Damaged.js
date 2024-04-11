const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearestThing = require("util.GetNearestThing");

function GetStructures_Damaged(creep, name)
{
    let structures = [];
    
    switch (name)
    {
        case "spawn":
            structures = creep.room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_SPAWN) 
                            && structure.hits < structure.hitsMax;
                    
                }
            });
            break;
            
        case "extension":
            structures = creep.room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_EXTENSION) 
                            && structure.hits < structure.hitsMax;
                }
            });
            break;
            
        case "tower":
            structures = creep.room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_TOWER) 
                        && structure.hits < structure.hitsMax;
                }
            });
            break;
            
        case "road":
            structures = creep.room.find(FIND_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_ROAD) 
                        && structure.hits < structure.hitsMax;
                }
            });
            break;
            
        case "wall":
            structures = creep.room.find(FIND_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_WALL) 
                        && structure.hits < structure.hitsMax;
                }
            });
            break;
            
        case "rampart":
            structures = creep.room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_RAMPART) 
                        && structure.hits < structure.hitsMax;
                }
            });
            break;
    }
    
    const structureCount = structures.length;
    
    if (name == "spawn" ||
        name == "extension" ||
        name == "wall" ||
        name == "rampart")
    {
        //Get structure with lowest hits
        let chosen = structures
            .filter(structure => !Targeted(creep, structure.id))
            .sort((s1, s2) => s1.hits <= s2.hits);
        if (chosen.length > 0)
        {
            return GetNearestThing(creep.pos.x, creep.pos.y, chosen);
        }
    }
    else
    {
        //Get nearest structure
        const damaged_structures = structures
            .filter(structure => !Targeted(creep, structure.id));
        if (damaged_structures.length > 0)
        {
            return GetNearestThing(creep.pos.x, creep.pos.y, damaged_structures);
        }
    }
    
    return null;    
}

module.exports = GetStructures_Damaged;