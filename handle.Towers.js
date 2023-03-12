var GetStructures = require('util.GetStructures');
var GetHostile = require('util.GetHostile');
var GetInjured = require('util.GetInjured');

function HandleTowers(debug) 
{
    for (var name in Game.spawns)
    {
        var spawn = Game.spawns[name];
        var towers = GetStructures(spawn.room, "Tower", false);
        if (towers != null)
        {
            var count = towers.length;
            if (count > 0)
            {
                for (let i = 0; i < count; i++)
                {
                    var tower = towers[i];
                    
                    var injured = GetInjured(tower);
                    if (injured != null)
                    {
                        tower.heal(injured);
                    }
                    else
                    {
                        var hostile = GetHostile(tower);
                        if (hostile != null)
                        {
                            tower.attack(hostile);
                        }
                    }
                }
            }
        }
    }
}

module.exports = HandleTowers;