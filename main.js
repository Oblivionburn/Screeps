const HandleSpawns = require("handle.Spawns");
const HandleCreeps = require("handle.Creeps");
const HandleBuilding = require("handle.Building");
const HandleTowers = require("handle.Towers");

function loop()
{
    HandleSpawns();
    HandleBuilding();
    HandleTowers();
    HandleCreeps();
}

module.exports = {loop}