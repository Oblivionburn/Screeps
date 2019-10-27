var Vector = require('Vector');

function Occupied(creep, location) 
{
    for (var name in Game.creeps) 
    {
        var other_creep = Game.creeps[name];
        if (creep.id != other_creep.id)
        {
            if (other_creep.pos.x == location.X &&
                other_creep.pos.y == location.Y) 
            {
                return true;
            }
        }
        
        var safe = [ "road", "rampart" ];
        var target = creep.room.lookAt(location.X, location.Y);
        if (target != null)
        {
            for (let t = 0; t < target.length; t++)
            {
                if (target[t].type == "terrain" &&
                    target[t].terrain == "wall")
                {
                    return true;
                }
                else if (target[t].type == "structure" &&
                        !safe.includes(target[t].structure.structureType))
                {
                    return true;
                }
            }
        }
    }
    
    return false;
}

module.exports = Occupied;