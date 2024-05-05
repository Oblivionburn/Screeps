const Occupied = require("util.Occupied");

function GoToward(creep, target)
{
    let x = creep.pos.x;
    let y = creep.pos.y;
    
    if (creep.pos.x < target.X)
    {
        //Move right
        x++;
        
        if (creep.pos.y < target.Y)
        {
            //Move down
            y++;
            
            if (Occupied(creep, x, y))
            {
                let choice = Math.floor(Math.random() * 2);
                choice++;
                if (choice == 1)
                {
                    //Just down
                    x--;
                }
                else if (choice == 2)
                {
                    //Just right
                    y--;
                }
            }
        }
        else if (creep.pos.y > target.Y)
        {
            //Move up
            y--;
            
            if (Occupied(creep, x, y))
            {
                let choice = Math.floor(Math.random() * 2);
                choice++;
                if (choice == 1)
                {
                    //Just up
                    x--;
                }
                else if (choice == 2)
                {
                    //Just right
                    y++;
                }
            }
        }
    }
    else if (creep.pos.x > target.X)
    {
        //Move left
        x--;
        
        if (creep.pos.y < target.Y)
        {
            //Move down
            y++;
            
            if (Occupied(creep, x, y))
            {
                let choice = Math.floor(Math.random() * 2);
                choice++;
                if (choice == 1)
                {
                    //Just down
                    x++;
                }
                else if (choice == 2)
                {
                    //Just left
                    y--;
                }
            }
        }
        else if (creep.pos.y > target.Y)
        {
            //Move up
            y--;
            
            if (Occupied(creep, x, y))
            {
                let choice = Math.floor(Math.random() * 2);
                choice++;
                if (choice == 1)
                {
                    //Just up
                    x++;
                }
                else if (choice == 2)
                {
                    //Just left
                    y++;
                }
            }
        }
    }
    else if (creep.pos.y < target.Y)
    {
        //Move down
        y++;
        
        if (Occupied(creep, x, y))
        {
            let choice = Math.floor(Math.random() * 2);
            choice++;
            if (choice == 1)
            {
                //Move right
                x++;
            }
            else if (choice == 2)
            {
                //Move left
                x--;
            }
        }
        
        if (Occupied(creep, x, y))
        {
            //Move just right or left
            y--;
        }
    }
    else if (creep.pos.y > target.Y)
    {
        //Move up
        y--;
        
        if (Occupied(creep, x, y))
        {
            let choice = Math.floor(Math.random() * 2);
            choice++;
            if (choice == 1)
            {
                //Move right
                x++;
            }
            else if (choice == 2)
            {
                //Move left
                x--;
            }
        }
        
        if (Occupied(creep, x, y))
        {
            //Move just right or left
            y++;
        }
    }
    
    if (x < creep.pos.x)
    {
        if (y < creep.pos.y)
        {
            creep.move(TOP_LEFT);
        }
        else if (y > creep.pos.y)
        {
            creep.move(BOTTOM_LEFT);
        }
        else
        {
            creep.move(LEFT);
        }
    }
    else if (x > creep.pos.x)
    {
        if (y < creep.pos.y)
        {
            creep.move(TOP_RIGHT);
        }
        else if (y > creep.pos.y)
        {
            creep.move(BOTTOM_RIGHT);
        }
        else
        {
            creep.move(RIGHT);
        }
    }
    else if (y < creep.pos.y)
    {
        creep.move(TOP);
    }
    else if (y > creep.pos.y)
    {
        creep.move(BOTTOM);
    }
}

module.exports = GoToward;