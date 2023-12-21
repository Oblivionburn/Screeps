const Position = require("object.Position");
const Targeted = require("util.Targeted");
const GetNearest = require("util.GetNearest");

function GetSiteToBuild(creep)
{
    let chosen = null;
    
    const sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
    const sitesCount = sites.length;

    if (sitesCount > 0)
    {
        let chosen = sites[0];
    
        //Get smallest site to start with
        for (let i = 0; i < sitesCount; i++)
        {
            const site = sites[i];
            
            if (site.progressTotal < chosen.progressTotal)
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
        if (chosen != null &&
            chosen.progress == 0)
        {
            const positions = [];
            
            //Get sites not targeted by other creeps
            for (let i = 0; i < sitesCount; i++)
            {
                const site = sites[i];
                
                if (!Targeted(creep, site.id) &&
                    site.progressTotal == chosen.progressTotal)
                {
                    positions.push(new Position(site.pos.x, site.pos.y));
                }
            }
            
            const positionCount = positions.length;
            if (positionCount > 0)
            {
                const nearest = GetNearest(creep.pos.x, creep.pos.y, positions);
                
                //Get site with nearest position
                for (let i = 0; i < sitesCount; i++)
                {
                    const site = sites[i];
                    
                    if (site.pos.x == nearest.X &&
                        site.pos.y == nearest.Y)
                    {
                        return site;
                    }
                }
            }
        }
        
        if (chosen != null)
        {
            return chosen;
        }
    }
    
    return chosen;
}

module.exports = GetSiteToBuild;