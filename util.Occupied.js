/*
    Used by:
        util.GetSourceToHarvest
*/

function Occupied(creep, x, y) 
{
    for (let creepName in Game.creeps) 
    {
        const otherCreep = Game.creeps[creepName];
        if (otherCreep.id != creep.id)
        {
            if (otherCreep.pos.x == x &&
                otherCreep.pos.y == y) 
            {
                return true;
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
    }
    
    return false;
}

module.exports = Occupied;