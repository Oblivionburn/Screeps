/*
    Used by:
        handle.Building
        task.Assault
        task.Build
        task.Flee
        task.Formation
        task.Harvest
        task.Repair
        task.Siphon
        task.Transfer
        task.Upgrade
        task.WaitNear
        task.Wander
        util.BuildStructure
        util.GetGrave
        util.GetHostile
        util.GetInjured
        util.GetSiphonTarget
        util.GetSiteToBuild
        util.GetSourceHarvestPositions
        util.GetStructures_Damaged
*/

class Position
{
    constructor(x, y)
    {
        this.X = x;
        this.Y = y;
    }
}

module.exports = Position;