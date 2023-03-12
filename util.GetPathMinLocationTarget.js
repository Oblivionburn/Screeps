function GetPathMinLocationTarget(open) 
{
    var current = open[0];
    var distance = current.ToTarget;

    var count = open.length;
    for (let a = 0; a < count; a++)
    {
        var location = open[a];
        
        var newDistance = location.ToTarget;
        if (newDistance < distance)
        {
            current = location;
            distance = newDistance;
        }
    }

    return current;
}

module.exports = GetPathMinLocationTarget;