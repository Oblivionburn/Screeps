/*
    Used by:
        spawn.Creeps
*/

function GetSpawnCost(partList) 
{
    let cost = 0;
    
    if (partList != null)
    {
        const partCount = partList.length;
        for (let i = 0; i < partCount; i++)
        {
            const part = partList[i];
            
            if (part == "move")
            {
                cost += 50;
            }
            else if (part == "work")
            {
                cost += 100;
            }
            else if (part == "carry")
            {
                cost += 50;
            }
            else if (part == "attack")
            {
                cost += 80;
            }
            else if (part == "ranged_attack")
            {
                cost += 150;
            }
            else if (part == "heal")
            {
                cost += 250;
            }
            else if (part == "claim")
            {
                cost += 600;
            }
            else if (part == "tough")
            {
                cost += 10;
            }
        }
    }
    
    return cost;
}

module.exports = GetSpawnCost;