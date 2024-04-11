function GetError(error) 
{
    switch (error)
    {
        case -1:
            return "Not the owner";
        case -2:
            return "No path";
        case -3:
            return "Name exists";
        case -4:
            return "Busy";
        case -5:
            return "Not found";
        case -6:
            return "Not enough";
        case -7:
            return "Invalid target";
        case -8:
            return "Full";
        case -9:
            return "Not in range";
        case -10:
            return "Invalid args";
        case -11:
            return "Tired";
        case -12:
            return "No body part";
        case -13:
            return "Unknown error";
        case -14:
            return "RCL not enough";
        case -15:
            return "GCL not enough";
        default:
            return error;
    }
}

module.exports = GetError;