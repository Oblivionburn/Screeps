function ALocation(x, y) 
{
    this.X = x;
    this.Y = y;
    this.TerrainCost = 0;
    this.ToStart = 0;
    this.ToTarget = 0;
    this.Parent = null;
}

module.exports = ALocation;