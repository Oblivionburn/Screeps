var HandleBuilding = require('handle.Building');
var HandleCreeps = require('handle.Creeps');
var HandleSpawning = require('handle.Spawning');

function loop()
{
    var debug = true;
    var queue = HandleSpawning(debug);
    HandleCreeps(debug);
    var built = HandleBuilding(debug);
    
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