var GetDistance = require('util.GetDistance');

function GoTo(creep, location) 
{
    var distance = GetDistance(creep.pos.x, creep.pos.y, location.X, location.Y);
    if (distance > 1)
    {
        creep.memory.task = "Travelling";
        creep.moveTo(location.X, location.Y, {visualizePathStyle: {stroke: '#ffffff'}});
    }
}

module.exports = GoTo;