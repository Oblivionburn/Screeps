const GetCreeps = require("util.GetCreeps");

function Targeted(creep, id)
{
    return GetCreeps(creep.room, "All")
        .some(otherCreep => otherCreep.id != creep.id &&
                            otherCreep.memory.target == id);
}

module.exports = Targeted;