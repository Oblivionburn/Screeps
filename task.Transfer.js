const CanHoldMoreEnergy = require("util.CanHoldMoreEnergy");
const Position = require("object.Position");
const GetError = require("util.GetError");
const GoTo = require("task.GoTo");

function Transfer(creep, thing) 
{
    creep.memory.task = "Transfering";
    creep.memory.target = thing.id;
    
    let transfering = creep.store[RESOURCE_ENERGY];
    let canHold = 0;
    
    if (thing.store != null)
    {
        canHold = thing.store.getFreeCapacity(RESOURCE_ENERGY);
    }
    else
    {
        canHold = thing.energyCapacity - thing.energy;
    }
    
    if (canHold < transfering)
    {
        transfering = canHold;
    }
    
    if (transfering > 0)
    {
        var result = creep.transfer(thing, RESOURCE_ENERGY);
        if (result == ERR_NOT_IN_RANGE)
        {
            const position = new Position(thing.pos.x, thing.pos.y);
            GoTo(creep, position, creep.room.name, creep.memory.task);
        }
        else if (result == 0) 
        {
            creep.say("Gave:" + transfering, true);
            creep.memory.task = "";
            creep.memory.target = "";
        }
        else
        {
            console.log(creep.name + " transfer Error: " + GetError(result));
        }
    }
}

module.exports = Transfer;