/*
    Used by:
        main
*/

const Harvester = require("job.Harvester");
const Upgrader = require("job.Upgrader");
const Builder = require("job.Builder");
const Fixer = require("job.Fixer");
const Soldier = require("job.Soldier");

function HandleCreeps()
{
    for (let creepName in Game.creeps)
    {
        const creep = Game.creeps[creepName];
        const job = creep.memory.job;
        
        if (job == "Harvester")
        {
            Harvester(creep);
        }
        else if (job == "Upgrader")
        {
            Upgrader(creep);
        }
        else if (job == "Builder")
        {
            Builder(creep);
        }
        else if (job == "Fixer")
        {
            Fixer(creep);
        }
        else if (job == "Soldier")
        {
            Soldier(creep);
        }
        
        if (creep.ticksToLive <= 61 && 
            creep.ticksToLive > 1)
        {
            new RoomVisual(creep.room.name).text("dead in " +  (creep.ticksToLive - 1) + "...", creep.pos.x, creep.pos.y + 1, {color: "red", font: "bold 0.7 Calibri"});
        }
    }
}

module.exports = HandleCreeps;