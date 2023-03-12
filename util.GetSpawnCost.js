function GetSpawnCost(body) 
{
    var result = 0;
    
    var count = body.length;
    for (let i = 0; i < count; i++)
    {
        var part = body[i];
        if (part == "move")
        {
            result += 50;
        }
        else if (part == "work")
        {
            result += 100;
        }
        else if (part == "carry")
        {
            result += 50;
        }
        else if (part == "attack")
        {
            result += 80;
        }
        else if (part == "ranged_attack")
        {
            result += 150;
        }
        else if (part == "heal")
        {
            result += 250;
        }
        else if (part == "claim")
        {
            result += 600;
        }
        else if (part == "tough")
        {
            result += 10;
        }
    }
    
    return result;
}

module.exports = GetSpawnCost;