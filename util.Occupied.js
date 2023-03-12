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
        var targets = creep.room.lookAt(location.X, location.Y);
        if (targets != null)
        {
            var count = targets.length;
            for (let t = 0; t < count; t++)
            {
                var target = targets[t];
                if (target.type == "terrain" &&
                    target.terrain == "wall")
                {
                    return true;
                }
                else if (target.type == "structure" &&
                        !safe.includes(target.structure.structureType))
                {
                    return true;
                }
            }
        }
    }
    
    return false;
}

module.exports = Occupied;