function GetSpawnTemplate(job)
{
    let template = [];
    
    if (job == "Harvester")
    {
        template = [WORK, CARRY, MOVE, MOVE]; //250
    }
    else if (job == "Builder")
    {
        template = [WORK, WORK, CARRY, MOVE]; //300
    }
    else if (job == "Upgrader" ||
             job == "Fixer")
    {
        template = [ATTACK, WORK, CARRY, MOVE]; //280
    }
    else if (job == "Soldier")
    {
        template = [ATTACK, MOVE, MOVE, MOVE, TOUGH, TOUGH]; //250
    }
    else if (job == "Claimer")
    {
        template = [CLAIM, MOVE]; //650
    }
    
    return template;
}

module.exports = GetSpawnTemplate;