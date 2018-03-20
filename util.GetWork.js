function GetWork(creep)
{
    var result = 0;
    
    for (i = 0; i < creep.body.length; i++)
    {
        if (creep.body[i].type == "work")
        {
            result++;
        }
    }
    
    return result;
}

module.exports = GetWork;