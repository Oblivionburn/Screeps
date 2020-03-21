function GetPathReached(location, target) 
{
    if ((location.X == target.X && location.Y == target.Y) ||
        (location.X >= target.X - 1 && location.X <= target.X + 1 &&
         location.Y >= target.Y - 1 && location.Y <= target.Y + 1))
    {
        return true;
    }
    
    return false;
}

module.exports = GetPathReached;