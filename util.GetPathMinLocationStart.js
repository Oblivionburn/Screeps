function GetPathMinLocationStart(open) 
{
    var current = open[0];
    var distance = current.ToStart;

    for (let a = 0; a < open.length; a++)
    {
        var newDistance = open[a].ToStart;
        if (newDistance < distance)
        {
            current = open[a];
            distance = newDistance;
        }
    }

    return current;
}

module.exports = GetPathMinLocationStart;