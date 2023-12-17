function NextTo(origin_x, origin_y, target_x, target_y) 
{
    if (origin_x >= target_x - 1 && origin_x <= target_x + 1 &&
        origin_y >= target_y - 1 && origin_y <= target_y + 1)
    {
        if (!(origin_x == target_x &&
              origin_y == target_y))
        {
            return true;
        }
    }
    
    return false;
}

module.exports = NextTo;