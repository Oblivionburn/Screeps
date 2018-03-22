function GetBodyCount(creep, type)
{
    var result = 0;
    
    for (i = 0; i < creep.body.length; i++)
    {
        if (creep.body[i].type == type)
        {
            result++;
        }
    }
    
    return result;
}

module.exports = GetBodyCount;