const GetCreeps = require("util.GetCreeps");

function Occupied(creep, x, y) 
{
    const otherCreeps = GetCreeps(creep.room, "All");
    const creepCount = otherCreeps.length;
    for (let c = 0; c < creepCount; c++)
    {
        const otherCreep = otherCreeps[c];
        if (otherCreep.id != creep.id)
        {
            if (otherCreep.pos.x == x &&
                otherCreep.pos.y == y) 
            {
                return true;
            }
        }
    }
    
    const safe = ["road", "rampart"];
    
    const things = creep.room.lookAt(x, y);
    if (things != null)
    {
        const thingCount = things.length;
        for (let t = 0; t < thingCount; t++)
        {
            const thing = things[t];
            
            if (thing.type == "terrain" &&
                thing.terrain == "wall")
            {
                return true;
            }
            else if (thing.type == "structure" &&
                     !safe.includes(thing.structure.structureType))
            {
                return true;
            }
        }
    }
    
    return false;
}

module.exports = Occupied;