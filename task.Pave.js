const CanBuild = require("util.CanBuild");

function Pave(creep) 
{
    if (CanBuild(creep.room, creep.pos.x, creep.pos.y))
    {
        creep.room.createConstructionSite(creep.pos.x, creep.pos.y, STRUCTURE_ROAD);
    }
}

module.exports = Pave;
