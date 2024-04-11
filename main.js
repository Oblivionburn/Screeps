const HandleBuilding = require("handle.Building");
const HandleTowers = require("handle.Towers");
const HandleSpawns = require("handle.Spawns");
const HandleCreeps = require("handle.Creeps");

function loop()
{
    HandleBuilding();
    HandleTowers();
    HandleSpawns();
    HandleCreeps();
}

module.exports = {loop}