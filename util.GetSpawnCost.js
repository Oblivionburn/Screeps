function GetSpawnCost(partList) 
{
    let cost = 0;
    
    if (partList != null)
    {
        const partCount = partList.length;
        for (let i = 0; i < partCount; i++)
        {
            const part = partList[i];
            
            switch (part)
            {
                case "move":
                    cost += 50;
                    break;
                    
                case "work":
                    cost += 100;
                    break;
                    
                case "carry":
                    cost += 50;
                    break;
                    
                case "attack":
                    cost += 80;
                    break;
                    
                case "ranged_attack":
                    cost += 150;
                    break;
                    
                case "heal":
                    cost += 250;
                    break;
                    
                case "claim":
                    cost += 600;
                    break;
                    
                case "tough":
                    cost += 10;
                    break;
            }
        }
    }
    
    return cost;
}

module.exports = GetSpawnCost;