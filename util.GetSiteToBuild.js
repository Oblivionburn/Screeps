const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearestThing = require("util.GetNearestThing");

function GetSiteToBuild(creep)
{
    const sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    const sitesCount = sites.length;

    let chosen = sites[0];
    
    //Get biggest site to start with
    for (let i = 0; i < sitesCount; i++)
    {
        const site = sites[i];
        
        if (site.progressTotal > chosen.progressTotal)
        {
            chosen = site;
        }
    }
    
    //Check for similar site that is closer to being built
    for (let i = 0; i < sitesCount; i++)
    {
        const site = sites[i];
        
        if (site.progress > chosen.progress &&
            site.progressTotal == chosen.progressTotal)
        {
            chosen = site;
        }
    }
    
    //If no similar sites started yet, get nearest
    if (chosen.progress == 0)
    {
        const availableSites = [];
        
        //Get sites not targeted by other creeps
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
            if (!Targeted(creep, site.id) &&
                site.progressTotal == chosen.progressTotal)
            {
                availableSites.push(site);
            }
        }
        
        if (availableSites.length > 0)
        {
            return GetNearestThing(creep.pos.x, creep.pos.y, availableSites);
        }
    }
    
    return chosen;
}

module.exports = GetSiteToBuild;