var HandleBuilding = require('handle.Building');
var HandleCreeps = require('handle.Creeps');
var HandleSpawning = require('handle.Spawning');
var HandleTowers = require('handle.Towers');

function loop()
{
    var debug = true;
    var automate_building = true;
    var invasion = false;
    
    var queue = HandleSpawning(debug);
    if (queue != "")
    {
        console.log(queue);
    }

    if (automate_building)
    {
        var built = HandleBuilding(debug);
        if (built != "")
        {
            console.log(built);
        }
    }

    HandleTowers(debug);
    HandleCreeps(invasion, debug);
}

module.exports = {loop}