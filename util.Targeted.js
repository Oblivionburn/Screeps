const GetCreeps_Other = require("util.GetCreeps_Other");

function Targeted(creep, id)
{
    return GetCreeps_Other(creep)
        .some(otherCreep => otherCreep.memory.target == id);
}

module.exports = Targeted;