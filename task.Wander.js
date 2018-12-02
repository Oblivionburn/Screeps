function Wander(creep) 
{
    creep.memory.task = "Wandering";
    
    var choice = Math.floor(Math.random() * 8);
    choice++;
    
    creep.move(choice);
}

module.exports = Wander;