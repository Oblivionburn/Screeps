var HandleBuilding = require('handle.Building');
var HandleCreeps = require('handle.Creeps');
var HandleSpawning = require('handle.Spawning');

function loop()
{
    var debug = true;
    var queue = HandleSpawning(debug);
    var elder = HandleCreeps(debug);
    var built = HandleBuilding(debug);
    
    if (elder != null &&
        debug)
    {
        if (elder.ticksToLive <= 30)
        {
            //console.log(elder.name + " in room " + elder.room.name + " will die in: " + elder.ticksToLive + " ticks.");
        }
    }
    
    if (queue != "")
    {
        console.log(queue);
    }
    
    if (built != "")
    {
        console.log(built);
    }
}

module.exports = {loop}