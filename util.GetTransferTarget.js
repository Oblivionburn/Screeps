const GetStructures = require("util.GetStructures");
const GetCreeps = require("util.GetCreeps");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");

function GetTransferTarget(creep)
{
    const job = creep.memory.job;
    let target = null;
    
    if (job == "Harvester")
    {
        const spawns = GetStructures(creep.room, "spawn");
        if (spawns.length > 0)
        {
            const spawn = spawns[0];
            if (CanHoldMoreEnergy(spawn))
            {
                return spawn;
            }
        }
        
        const extensions = GetStructures(creep.room, "extension");
        const extensionCounts = extensions.length;
        for (let i = 0; i < extensionCounts; i++)
        {
            const extension = extensions[i];
            if (CanHoldMoreEnergy(extension))
            {
                return extension;
            }
        }
    }
    
    const towers = GetStructures(creep.room, "tower");
    const towerCounts = towers.length;
    for (let i = 0; i < towerCounts; i++)
    {
        const tower = towers[i];
        if (CanHoldMoreEnergy(tower))
        {
            return tower;
        }
    }
    
    if (job != "Builder")
    {
        const builders = GetCreeps(creep.room, "Builder");
        const builderCounts = builders.length;
        for (let i = 0; i < builderCounts; i++)
        {
            const builder = builders[i];
            if (CanHoldMoreEnergy(builder))
            {
                return builder;
            }
        }
    }
    
    if (job == "Harvester")
    {
        const fixers = GetCreeps(creep.room, "Fixer");
        const fixerCounts = fixers.length;
        for (let i = 0; i < fixerCounts; i++)
        {
            const fixer = fixers[i];
            if (CanHoldMoreEnergy(fixer))
            {
                return fixer;
            }
        }
    }
    
    return null;
}

module.exports = GetTransferTarget;