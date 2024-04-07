function WithinBoundary(x, y, min_x, max_x, min_y, max_y) 
{
    if (x >= min_x && x <= max_x &&
        y >= min_y && y <= max_y)
    {
        return true;
    }
    
    return false;
}

module.exports = WithinBoundary;