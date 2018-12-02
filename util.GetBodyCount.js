function GetBodyCount(creep, type)
{
    var result = 0;
    
    for (let i = 0; i < creep.body.length; i++)
    {
        if (creep.body[i].type == type &&
            creep.body[i].hits > 0)
        {
            result++;
        }
    }
    
    return result;
}

module.exports = GetBodyCount;