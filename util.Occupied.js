function Occupied(location) 
{
    for (var name in Game.creeps) 
    {
        var creep = Game.creeps[name];
        if (creep.pos.x == location.X &&
            creep.pos.y == location.Y) 
        {
            return true;
        }
    }
    
    return false;
}

module.exports = Occupied;