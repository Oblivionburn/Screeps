function GetPathMinLocationStart(open) 
{
    var current = open[0];
    var distance = current.ToStart;

    for (let a = 0; a < open.length; a++)
    {
        var new_distance = open[a].ToStart;
        if (new_distance < distance)
        {
            current = open[a];
            distance = new_distance;
        }
    }

    return current;
}

module.exports = GetPathMinLocationStart;