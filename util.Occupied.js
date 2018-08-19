function Occupied(creep, location) 
{
    for (var name in Game.creeps) 
    {
        var other_creep = Game.creeps[name];
        if (other_creep.pos.x == location.X &&
            other_creep.pos.y == location.Y &&
            creep.name != other_creep.name) 
        {
            return true;
        }
    }
    
    return false;
}

module.exports = Occupied;