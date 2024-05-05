const GetStructures = require("util.GetStructures");
const NextTo = require("util.NextTo");
const GetOpenHarvestPositions = require("util.GetOpenHarvestPositions");
const GetNearestPosition = require("util.GetNearestPosition");

function GetSourceToHarvest(creep)
{
    const sources = GetStructures(creep.room, "source");
    const sourceCount = sources.length;
    
    if (sourceCount > 0)
    {
        const availablePositions = [];
        
        for (let i = 0; i < sourceCount; i++)
        {
            const source = sources[i];
            if (source.energy > 0)
            {
                //Check if creep is already next to a source
                if (NextTo(creep.pos.x, creep.pos.y, source.pos.x, source.pos.y))
                {
                    return source;
                }
                
                //Get all open harvest positions
                const harvestPositions = GetOpenHarvestPositions(creep, source);
                const harvestCount = harvestPositions.length;
                for (let i = 0; i < harvestCount; i++)
                {
                    const harvestPosition = harvestPositions[i];
                    availablePositions.push(harvestPosition);
                }
            }
        }
        
        //Get nearest open harvest position
        const nearest = GetNearestPosition(creep.pos.x, creep.pos.y, availablePositions);
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

module.exports = GetSourceToHarvest;