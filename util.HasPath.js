function HasPath(pathArray, x, y) 
{
    for (let i = 0; i < pathArray.length; i++)
    {
        if (pathArray[i].X == x &&
            pathArray[i].Y == y)
        {
            return true;
        }
    }
    
    return false;
}

module.exports = HasPath;