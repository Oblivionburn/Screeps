const Harvester = require("job.Harvester");
const Upgrader = require("job.Upgrader");
const Healer = require("job.Healer");
const Builder = require("job.Builder");
const Fixer = require("job.Fixer");
const Soldier = require("job.Soldier");
const Claimer = require("job.Claimer");
const Invader = require("job.Invader");

function HandleCreeps()
{
    for (let creepName in Game.creeps)
    {
        const creep = Game.creeps[creepName];
        const job = creep.memory.job;
        
        switch (job)
        {
            case "Harvester":
                Harvester(creep);
                break;
                
            case "Upgrader":
                Upgrader(creep);
                break;
                
            case "Healer":
                Healer(creep);
                break;
                
            case "Builder":
                Builder(creep);
                break;
                
            case "Fixer":
                Fixer(creep);
                break;
                
            case "Soldier":
                Soldier(creep);
                break;
                
            case "Claimer":
                Claimer(creep);
                break;
                
            case "Invader":
                Invader(creep);
                break;
        }
        
        if (creep.ticksToLive <= 61 && 
            creep.ticksToLive > 1)
        {
            new RoomVisual(creep.room.name).text("TicksToLive: " + (creep.ticksToLive - 1), creep.pos.x, creep.pos.y + 1, {color: "red", font: "bold 0.7 Calibri"});
        }
    }
}

module.exports = HandleCreeps;