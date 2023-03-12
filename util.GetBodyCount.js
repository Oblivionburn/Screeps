function GetBodyCount(creep, type)
{
    var result = 0;
    
    var count = creep.body.length;
    for (let i = 0; i < count; i++)
    {
        var body = creep.body[i];
        if (body.type == type &&
            body.hits > 0)
        {
            result++;
        }
    }
    
    return result;
}

module.exports = GetBodyCount;