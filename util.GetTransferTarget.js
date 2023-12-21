/*
    Used by:
        ai.GetTask
*/

const GetStructures = require("util.GetStructures");
const GetCreeps = require("util.GetCreeps");
const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");

function GetTransferTarget(creep)
{
    let target = null;
    
    const allStructures = creep.room.find(FIND_MY_STRUCTURES);
    
    const spawns = GetStructures(allStructures, "spawn");
    const spawnCounts = spawns.length;
    for (let i = 0; i < spawnCounts; i++)
    {
        const spawn = spawns[i];
        if (CanHoldMoreEnergy(spawn))
        {
            return spawn;
        }
    }
    
    const extensions = GetStructures(allStructures, "extension");
    const extensionCounts = extensions.length;
    for (let i = 0; i < extensionCounts; i++)
    {
        const extension = extensions[i];
        if (CanHoldMoreEnergy(extension))
        {
            return extension;
        }
    }
    
    const towers = GetStructures(allStructures, "tower");
    const towerCounts = towers.length;
    for (let i = 0; i < towerCounts; i++)
    {
        const tower = towers[i];
        if (CanHoldMoreEnergy(tower))
        {
            return tower;
        }
    }
    
    const allCreeps = room.find(FIND_MY_CREEPS);
    
    const builders = GetCreeps(allCreeps, "Builder");
    const builderCounts = builders.length;
    for (let i = 0; i < builderCounts; i++)
    {
        const builder = builders[i];
        if (CanHoldMoreEnergy(builder))
        {
            return builder;
        }
    }
    
    const fixers = GetCreeps(allCreeps, "Fixer");
    const fixerCounts = fixers.length;
    for (let i = 0; i < fixerCounts; i++)
    {
        const fixer = fixers[i];
        if (CanHoldMoreEnergy(fixer))
        {
            return fixer;
        }
    }
    
    const upgraders = GetCreeps(allCreeps, "Upgrader");
    const upgraderCounts = upgraders.length;
    for (let i = 0; i < upgraderCounts; i++)
    {
        const upgrader = upgraders[i];
        if (CanHoldMoreEnergy(upgrader))
        {
            return upgrader;
        }
    }
    
    return null;
}

module.exports = GetTransferTarget;