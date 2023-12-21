/*
    Used by:
        ai.GetTask
*/

const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearest = require("util.GetNearest");
const GetGrave = require("util.GetGrave");

function GetSiphonTarget(creep)
{
    const grave = GetGrave(creep);
    if (grave != null)
    {
        return grave;
    }
    
    const sites = [];
    
    const allStructures = creep.room.find(FIND_MY_STRUCTURES);
    const structureCount = allStructures.length;

    for (let i = 0; i < structureCount; i++)
    {
        const structure = allStructures[i];
        
        if (structure.structureType == STRUCTURE_EXTENSION &&
            structure.store[RESOURCE_ENERGY] > 0)
        {
            sites.push(structure);
        }
    }
    
    const ruins = creep.room.find(FIND_RUINS);
    const ruinsCount = ruins.length;
    
    for (let i = 0; i < ruinsCount; i++)
    {
        const ruin = ruins[i];
        
        if (ruin.store[RESOURCE_ENERGY] > 0)
        {
            sites.push(ruin);
        }
    }
    
    const sitesCount = sites.length;
    
    const positions = [];
    for (let i = 0; i < sitesCount; i++)
    {
        const site = sites[i];
        
        const position = new Position(site.pos.x, site.pos.y);
        
        if (!Targeted(creep, site.id))
        {
            positions.push(position);
        }
    }
    
    const positionsCount = positions.length;
    if (positionsCount > 0)
    {
        const nearest = GetNearest(creep.pos.x, creep.pos.y, positions);
        
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
            if (site.pos.x == nearest.X &&
                site.pos.y == nearest.Y)
            {
                return site;
            }
        }
    }
        
    return null;
}

module.exports = GetSiphonTarget;