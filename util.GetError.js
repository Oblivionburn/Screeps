function GetError(error) 
{
    if (error == -1)
    {
        return "Not the owner";
    }
    else if (error == -2)
    {
        return "No path";
    }
    else if (error == -3)
    {
        return "Name exists";
    }
    else if (error == -4)
    {
        return "Busy";
    }
    else if (error == -5)
    {
        return "Not found";
    }
    else if (error == -6)
    {
        return "Not enough";
    }
    else if (error == -7)
    {
        return "Invalid target";
    }
    else if (error == -8)
    {
        return "Full";
    }
    else if (error == -9)
    {
        return "Not in range";
    }
    else if (error == -10)
    {
        return "Invalid args";
    }
    else if (error == -11)
    {
        return "Tired";
    }
    else if (error == -12)
    {
        return "No body part";
    }
    else if (error == -14)
    {
        return "RCL not enough";
    }
    else if (error == -15)
    {
        return "GCL not enough";
    }
    else
    {
        return error;
    }
}

module.exports = GetError;