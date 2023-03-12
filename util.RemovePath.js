function RemovePath(pathArray, x, y) 
{
    var count = pathArray.length;
    for (let i = 0; i < count; i++)
    {
        var path = pathArray[i];
        if (path.X == x &&
            path.Y == y)
        {
            pathArray.splice(i, 1);
        }
    }
    
    return pathArray;
}

module.exports = RemovePath;