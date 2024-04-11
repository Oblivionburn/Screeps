const GetCreeps = require("util.GetCreeps");

function Occupied(creep, x, y) 
{
    const otherCreeps = GetCreeps(creep.room, "All")
        .some(otherCreep => otherCreep.id != creep.id &&
                              otherCreep.pos.x == x &&
                              otherCreep.pos.y == y);
    if (otherCreeps)             
    {
        return true;
    }
    
    const safe = ["road", "rampart"];
    
    const things = creep.room.lookAt(x, y)
        .some(thing => (thing.type == "terrain" &&
                         thing.terrain == "wall") ||
                         (thing.type == "structure" &&
                         !safe.includes(thing.structure.structureType)));
    if (things)
    {
        return true;
    }
    
    return false;
}

module.exports = Occupied;