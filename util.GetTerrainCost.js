var Vector = require('Vector');

function GetTerrainCost(room, location) 
{
    var target = room.lookAt(location.X, location.Y);
    if (target != null)
    {
        for (let t = 0; t < target.length; t++)
        {
            if (target[t].type == "structure" &&
                target[t].structure.structureType == "road")
            {
                return 0;
            }
            else if (target[t].type == "terrain")
            {
                if (target[t].terrain == "plain")
                {
                    return 1;
                }
                else if (target[t].terrain == "swamp")
                {
                    return 2;
                }
            }
        }
    }
    
    return 0;
}

module.exports = GetTerrainCost;