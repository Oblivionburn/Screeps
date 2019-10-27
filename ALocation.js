function ALocation(x, y, toStart, toTarget, terrainCost) 
{
    this.X = x;
    this.Y = y;
    this.ToStart = toStart;
    this.ToTarget = toTarget;
    this.TerrainCost = terrainCost;
}

module.exports = ALocation;