function NextTo(location, target) 
{
    if (location.X >= target.X - 1 && location.X <= target.X + 1 &&
        location.Y >= target.Y - 1 && location.Y <= target.Y + 1)
    {
        if (!(location.X == target.X &&
              location.Y == target.Y))
        {
            return true;
        }
    }
    
    return false;
}

module.exports = NextTo;