var HandleCreeps = require('handle.Creeps');
var HandleSpawning = require('handle.Spawning');

module.exports.loop = function () 
{
    HandleSpawning();
    HandleCreeps();
}