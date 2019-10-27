function GetPathMinLocationTarget(open) 
{
    var current = open[0];
    var distance = current.ToTarget;

    for (let a = 0; a < open.length; a++)
    {
        var newDistance = open[a].ToTarget;
        if (newDistance < distance)
        {
            current = open[a];
            distance = newDistance;
        }
    }

    return current;
}

module.exports = GetPathMinLocationTarget;