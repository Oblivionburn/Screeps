function GetSpawnCost(partList) 
{
    let total = 0;
    
    if (partList != null)
    {
        const partCount = partList.length;
        for (let i = 0; i < partCount; i++)
        {
            const part = partList[i];
            
            switch (part)
            {
                case "move":
                    total += 50;
                    break;
                    
                case "work":
                    total += 100;
                    break;
                    
                case "carry":
                    total += 50;
                    break;
                    
                case "attack":
                    total += 80;
                    break;
                    
                case "ranged_attack":
                    total += 150;
                    break;
                    
                case "heal":
                    total += 250;
                    break;
                    
                case "claim":
                    total += 600;
                    break;
                    
                case "tough":
                    total += 10;
                    break;
            }
        }
    }
    
    return total;
}

module.exports = GetSpawnCost;