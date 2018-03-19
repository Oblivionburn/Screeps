function GetWork(creep)
{
    var work = 0;
    
    for (i = 0; i < creep.body.length; i++)
    {
        if (creep.body[i].type == "work")
        {
            work++;
        }
    }
    
    return work;
}

module.exports = GetWork;