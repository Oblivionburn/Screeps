const GetDistance = require("util.GetDistance");

function GetNearestPosition(x, y, positions) 
{
    if (positions != null)
    {
        const positionCount = positions.length;
        if (positionCount > 0)
        {
            let position = positions[0];
            let distance = GetDistance(x, y, position.X, position.Y);
            
            for (let i = 0; i < positionCount; i++)
            {
                const newPosition = positions[i];
                const newDistance = GetDistance(x, y, newPosition.X, newPosition.Y);
                
                if (newDistance < distance &&
                    newDistance > 0)
                {
                    position = newPosition;
                    distance = newDistance;
                }
            }
            
            return position;
        }
    }
    
    return null;
}

module.exports = GetNearestPosition;