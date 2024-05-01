function Occupied(creep, x, y) 
{
    const safe = ["road", "rampart"];
    const structures = creep.room.lookForAt(LOOK_STRUCTURES, x, y)
        .some(structure => (!safe.includes(structure.structureType)));
    if (structures)
    {
        return true;
    }
    
    const wall = creep.room.getTerrain().get(x, y) == 1;
    if (wall)
    {
        return true;
    }
    
    const otherCreeps = creep.room.lookForAt(LOOK_CREEPS, x, y)
        .some(otherCreep => otherCreep.id != creep.id);
    if (otherCreeps)             
    {
        return true;
    }
    
    return false;
}

module.exports = Occupied;