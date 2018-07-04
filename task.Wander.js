function Wander(creep) 
{
    creep.memory.task = "Wandering";
    
    var choice = Math.floor(Math.random() * 8);
    
    if (choice == 0)
    {
        creep.move(TOP);
    }
    else if (choice == 1)
    {
        creep.move(RIGHT);
    }
    else if (choice == 2)
    {
        creep.move(BOTTOM);
    }
    else if (choice == 3)
    {
        creep.move(LEFT);
    }
    else if (choice == 4)
    {
        creep.move(TOP_RIGHT);
    }
    else if (choice == 5)
    {
        creep.move(BOTTOM_RIGHT);
    }
    else if (choice == 6)
    {
        creep.move(BOTTOM_LEFT);
    }
    else if (choice == 7)
    {
        creep.move(TOP_LEFT);
    }
}

module.exports = Wander;