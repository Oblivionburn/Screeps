var Vector = require('Vector');
var Build = require('util.Build');

function BuildStructure(spawn, structure_type, debug)
{
    var built = "";
    
    var success = false;
    var turn = false;
    
    var location = new Vector(spawn.pos.x, spawn.pos.y);
    for (let i = 1; i < 20; i++)
    {
        if (turn)
        {
            for (let j = 0; j < i; j++)
            {
                location.Y++;
                success = Build(spawn.room, location, structure_type);
                
                if (success)
                {
                    built = "Built " + structure_type + " in room " + spawn.room.name + " at " + location.X + "," + location.Y;
                    break;
                }
            }
            
            if (success)
            {
                break;
            }
            else
            {
                for (let j = 0; j < i; j++)
                {
                    location.X--;
                    success = Build(spawn.room, location, structure_type);
                    
                    if (success)
                    {
                        break;
                    }
                }
            }
            
            if (success)
            {
                break;
            }
            else
            {
                turn = false;
            }
        }
        else
        {
            for (let j = 0; j < i; j++)
            {
                location.Y--;
                success = Build(spawn.room, location, structure_type);
                
                if (success)
                {
                    break;
                }
            }
            
            if (success)
            {
                break;
            }
            else
            {
                for (let j = 0; j < i; j++)
                {
                    location.X++;
                    success = Build(spawn.room, location, structure_type);
                    
                    if (success)
                    {
                        break;
                    }
                }
            }
            
            if (success)
            {
                break;
            }
            else
            {
                turn = true;
            }
        }
    }
    
    if (success)
    {
        built = "Built " + structure_type + " in room " + spawn.room.name + " at " + location.X + "," + location.Y;
    }
    
    return built;
}

module.exports = BuildStructure;