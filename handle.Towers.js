const GetStructures = require("util.GetStructures");
const GetHostile = require("util.GetHostile");
const GetInjured = require("util.GetInjured");

function HandleTowers(spawns) 
{
    for (let roomName in Game.rooms)
    {
        const room = Game.rooms[roomName];
        
        const towers = GetStructures(room, "tower");
        const towerCount = towers.length;
        
        for (let i = 0; i < towerCount; i++)
        {
            const tower = towers[i];
            
            const injured = GetInjured(room, tower.pos.x, tower.pos.y);
            if (injured != null)
            {
                tower.heal(injured);
            }
            else
            {
                const hostile = GetHostile(room, tower.pos.x, tower.pos.y);
                if (hostile != null)
                {
                    tower.attack(hostile);
                }
            }
        }
    }
}

module.exports = HandleTowers;