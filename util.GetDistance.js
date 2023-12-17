function GetDistance(x1, y1, x2, y2) 
{
    let x_diff = x1 - x2;
    let y_diff = y1 - y2;
    
    if (x_diff < 0)
    {
        x_diff *= -1;
    }
    
    if (y_diff < 0)
    {
        y_diff *= -1;
    }
    
    return (x_diff + y_diff);
}

module.exports = GetDistance;