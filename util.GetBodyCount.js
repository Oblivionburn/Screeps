function GetBodyCount(creep, type)
{
    let result = 0;
    
    const bodyCount = creep.body.length;
    for (let i = 0; i < bodyCount; i++)
    {
        const body = creep.body[i];
        if (body.type == type &&
            body.hits > 0)
        {
            result++;
        }
    }
    
    return result;
}

module.exports = GetBodyCount;