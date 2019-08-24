var Harvester = require('role.Harvester');
var Builder = require('role.Builder');
var Upgrader = require('role.Upgrader');
var Fixer = require('role.Fixer');
var Soldier = require('role.Soldier');

function HandleCreeps(debug) 
{
    for (var name in Game.creeps)
    {
        var creep = Game.creeps[name];
        
        if (creep.memory.role == 'Harvester') 
        {
            Harvester(creep, debug);
        }
        else if (creep.memory.role == 'Builder') 
        {
            Builder(creep, debug);
        }
        else if (creep.memory.role == 'Upgrader') 
        {
            Upgrader(creep, debug);
        }
        else if (creep.memory.role == 'Fixer') 
        {
            Fixer(creep, debug);
        }
        else if (creep.memory.role == 'Soldier') 
        {
            Soldier(creep, debug);
        }
        
        if (creep.ticksToLive <= 60 && debug)
        {
            new RoomVisual(creep.room.name).text(creep.ticksToLive + " ticks to live", creep.pos.x, creep.pos.y + 1, {color: "red", font: "bold 0.7 Calibri"});
        }
    }
}

module.exports = HandleCreeps;