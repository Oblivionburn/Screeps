function RemovePath(pathArray, x, y) 
{
    for (let i = 0; i < pathArray.length; i++)
    {
        if (pathArray[i].X == x &&
            pathArray[i].Y == y)
        {
            pathArray.splice(i, 1);
        }
    }
    
    return pathArray;
}

module.exports = RemovePath;