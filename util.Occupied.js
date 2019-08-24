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
    }
    
    return false;
}

module.exports = Occupied;