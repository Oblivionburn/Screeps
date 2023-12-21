const GetStructures = require("util.GetStructures");
const GetHostile = require("util.GetHostile");
const GetInjured = require("util.GetInjured");

function HandleTowers() 
{
    for (let spawnName in Game.spawns)
    {
        const spawn = Game.spawns[spawnName];
        
        const allStructures = spawn.room.find(FIND_MY_STRUCTURES);
        
        const towers = GetStructures(allStructures, "tower");
        const towerCount = towers.length;
        
        for (let i = 0; i < towerCount; i++)
        {
            const tower = towers[i];
            
            const injured = GetInjured(tower.room, tower.pos.x, tower.pos.y);
            if (injured != null)
            {
                tower.heal(injured);
            }
            else
            {
                const hostile = GetHostile(tower.room, tower.pos.x, tower.pos.y);
                if (hostile != null)
                {
                    tower.attack(hostile);
                }
            }
        }
    }
}

module.exports = HandleTowers;