var HandleCreeps = require('handle.Creeps');
var HandleSpawning = require('handle.Spawning');

module.exports.loop = function () 
{
    var queue = HandleSpawning();
    var elder = HandleCreeps();

    if (elder != null)
    {
        console.log(elder.name + " will die in: " + elder.ticksToLive + " ticks.");
    }
    
    if (queue != "")
    {
        console.log(queue);
    }
}