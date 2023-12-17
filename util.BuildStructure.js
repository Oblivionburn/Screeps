const Position = require("object.Position");
const Build = require("util.Build");

function BuildStructure(spawn, structure_type)
{
    let success = false;
    let turn = false;
    
    //Spiral out from spawn clockwise (starting with 1 step directly down) looking for locations to build the structure
    const position = new Position(spawn.pos.x, spawn.pos.y);
    
    for (let i = 1; i < 20; i++)
    {
        if (turn)
        {
            for (let j = 0; j < i; j++)
            {
                position.Y++;
                success = Build(spawn.room, position, structure_type);
                
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
                    position.X--;
                    success = Build(spawn.room, position, structure_type);
                    
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
                position.Y--;
                success = Build(spawn.room, position, structure_type);
                
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
                    position.X++;
                    success = Build(spawn.room, position, structure_type);
                    
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
}

module.exports = BuildStructure;