const GetStructures = require("util.GetStructures");
const NextTo = require("util.NextTo");
const GetSourceHarvestPositions = require("util.GetSourceHarvestPositions");
const Occupied = require("util.Occupied");
const GetNearest = require("util.GetNearest");

function GetSourceToHarvest(creep)
{
    const sources = creep.room.find(FIND_SOURCES);
    const sourceCount = sources.length;
    
    if (sourceCount > 0)
    {
        //Check if creep is already next to a source
        for (let i = 0; i < sourceCount; i++)
        {
            const source = sources[i];
            
            if (NextTo(creep.pos.x, creep.pos.y, source.pos.x, source.pos.y))
            {
                return source;
            }
        }
        
        const harvestPositions = GetSourceHarvestPositions(creep.room);
        const harvestCount = harvestPositions.length;
        if (harvestCount > 0)
        {
            const availablePositions = [];
            
            //Get all open harvest positions
            for (let i = 0; i < harvestCount; i++)
            {
                const harvestPosition = harvestPositions[i];
                
                if (!Occupied(creep, harvestPosition.X, harvestPosition.Y))
                {
                    availablePositions.push(harvestPosition);
                }
            }
            
            //Get nearest open harvest position
            const nearest = GetNearest(creep.pos.x, creep.pos.y, availablePositions);
            if (nearest != null)
            {
                //Get source next to nearest position
                for (let i = 0; i < sourceCount; i++)
                {
                    const source = sources[i];
                    
                    if (NextTo(nearest.X, nearest.Y, source.pos.x, source.pos.y))
                    {
                        return source;
                    }
                }
            }
        }
    }
}

module.exports = GetSourceToHarvest;