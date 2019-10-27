function GetPathMinLocationTarget(open) 
{
    var current = open[0];
    var currentNear = current.ToTarget;

    for (let a = 0; a < open.length; a++)
    {
        var newNear = open[a].ToTarget;

        if (newNear < currentNear)
        {
            current = open[a];
            currentNear = newNear;
        }
    }

    return current;
}

module.exports = GetPathMinLocationTarget;