function GetSpawnCost(body) 
{
    var result = 0;
    
    for (i = 0; i < body.length; i++)
    {
        if (body[i] == "move")
        {
            result += 50;
        }
        else if (body[i] == "work")
        {
            result += 100;
        }
        else if (body[i] == "carry")
        {
            result += 50;
        }
        else if (body[i] == "attack")
        {
            result += 80;
        }
        else if (body[i] == "ranged_attack")
        {
            result += 150;
        }
        else if (body[i] == "heal")
        {
            result += 250;
        }
        else if (body[i] == "claim")
        {
            result += 600;
        }
        else if (body[i] == "tough")
        {
            result += 10;
        }
    }
    
    return result;
}

module.exports = GetSpawnCost;