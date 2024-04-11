function GetSpawnTemplate(job)
{
    let template = [];
    
    switch (job)
    {
        case "Harvester":
            template = [WORK, CARRY, MOVE, MOVE]; //250
            break;
            
        case "Upgrader":
        case "Fixer":
            template = [ATTACK, WORK, CARRY, MOVE]; //280
            break;
            
        case "Healer":
            template = [WORK, WORK, CARRY, MOVE]; //300
            break;
            
        case "Builder":
            template = [WORK, WORK, CARRY, MOVE]; //300
            break;
            
        case "Soldier":
            template = [ATTACK, MOVE, MOVE, MOVE, TOUGH, TOUGH]; //250
            break;
            
        case "Invader":
            template = [ATTACK, WORK, CARRY, MOVE, MOVE, MOVE]; //380
            break;
            
        case "Claimer":
            template = [CLAIM, MOVE]; //650
            break;
    }
    
    return template;
}

module.exports = GetSpawnTemplate;