function GetBodyCount(creep, type)
{
    let total = 0;
    
    const bodyCount = creep.body.length;
    for (let i = 0; i < bodyCount; i++)
    {
        const body = creep.body[i];
        if (body.type == type &&
            body.hits > 0)
        {
            total++;
        }
    }
    
    return total;
}

module.exports = GetBodyCount;