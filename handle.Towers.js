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
            if (towers.length > 0)
            {
                for (let i = 0; i < towers.length; i++)
                {
                    var injured = GetInjured(towers[i]);
                    if (injured != null)
                    {
                        towers[i].heal(injured);
                    }
                    else
                    {
                        var hostile = GetHostile(towers[i]);
                        if (hostile != null)
                        {
                            towers[i].attack(hostile);
                        }
                    }
                }
            }
        }
    }
}

module.exports = HandleTowers;