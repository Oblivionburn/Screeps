const Position = require('object.Position');
const GetBodyCount = require('util.GetBodyCount');
const GetError = require('util.GetError');
const GoTo = require('task.GoTo');

function Build(creep, structure) 
{
    creep.memory.task = "Building";
    creep.memory.target = structure.id;
    
    const work = GetBodyCount(creep, "work") * 5;
    
    let total = structure.progressTotal - structure.progress - work;
    if (total < 0)
    {
        total = 0;    
    }
    
    const result = creep.build(structure);
    if (result == ERR_NOT_IN_RANGE)
    {
        var position = new Position(structure.pos.x, structure.pos.y);
        GoTo(creep, position, creep.room.name, creep.memory.task);
    }
    else if (result == 0) 
    {
        creep.say(total, true);
    }
    else
    {
        console.log(creep.name + " build Error: " + GetError(result));
    }
}

module.exports = Build;