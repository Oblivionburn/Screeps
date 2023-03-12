var Vector = require('Vector');

function GetTerrainCost(room, location) 
{
    var targets = room.lookAt(location.X, location.Y);
    if (targets != null)
    {
        var count = targets.length;
        for (let t = 0; t < count; t++)
        {
            var target = targets[t];
            
            if (target.type == "structure" &&
                target.structure.structureType == "road")
            {
                return 0;
            }
            else if (target.type == "terrain")
            {
                if (target.terrain == "plain")
                {
                    return 1;
                }
                else if (target.terrain == "swamp")
                {
                    return 2;
                }
            }
        }
    }
    
    return 0;
}

module.exports = GetTerrainCost;