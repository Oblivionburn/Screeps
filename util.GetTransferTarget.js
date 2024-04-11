const GetStructures = require("util.GetStructures");
const GetCreeps = require("util.GetCreeps");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");
const GetNearestThing = require("util.GetNearestThing");

function GetTransferTarget(creep)
{
    const job = creep.memory.job;
    let target = null;
    
    if (job == "Harvester")
    {
        const spawns = GetStructures(creep.room, "spawn")
            .filter(spawn => CanHoldMoreEnergy(spawn));
        if (spawns.length > 0)
        {
            return spawns[0];
        }
        
        const availableExtensions = GetStructures(creep.room, "extension")
            .filter(extension => CanHoldMoreEnergy(extension));
        if (availableExtensions.length > 0)
        {
            return GetNearestThing(creep.pos.x, creep.pos.y, availableExtensions);
        }
    }
    
    const towers = GetStructures(creep.room, "tower")
        .filter(tower => CanHoldMoreEnergy(tower));
    if (towers.length > 0)
    {
        return towers[0];
    }
    
    if (job != "Builder")
    {
        const builders = GetCreeps(creep.room, "Builder")
            .filter(builder => CanHoldMoreEnergy(builder));
        if (builders.length > 0)
        {
            return builders[0];
        }
    }
    
    if (job == "Harvester")
    {
        const fixers = GetCreeps(creep.room, "Fixer")
            .filter(fixer => CanHoldMoreEnergy(fixer));
        if (fixers.length > 0)
        {
            return fixers[0];
        }
    }
    
    return null;
}

module.exports = GetTransferTarget;