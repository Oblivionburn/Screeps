function HasPath(pathArray, location) 
{
    var count = pathArray.length;
    for (let i = 0; i < count; i++)
    {
        var pathLocation = pathArray[i];
        
        if (location.X == pathLocation.X &&
            location.Y == pathLocation.Y)
        {
            return true;
        }
    }
    
    return false;
}

module.exports = HasPath;