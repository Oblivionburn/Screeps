/*
    Used by:
        task.Attack
*/

const Position = require("object.Position");
const GoTo = require("task.GoTo");
const GetCreeps = require("util.GetCreeps");
const GetNearest = require("util.GetNearest");
const NextTo = require("util.NextTo");

function Formation(creep, thing) 
{
    creep.memory.task = "Formation";
    
    const allCreeps = room.find(FIND_MY_CREEPS);
    
    const soldiers = GetCreeps(allCreeps, "Soldier");
    const soldierCount = soldiers.length;
    
    let positions = [];
    for (let i = 0; i < soldierCount; i++)
    {
        const soldier = soldiers[i];
        if (soldier.id != creep.id)
        {
            positions.push(new Position(soldier.pos.x, soldier.pos.y));
        }
    }
    
    const nearest = GetNearest(creep.pos.x, creep.pos.y, positions);
    
    if (NextTo(creep.pos.x, creep.pos.y, nearest.X, nearest.Y))
    {
        return true;
    }
    else
    {
        GoTo(creep, nearest, creep.memory.task);
        return false;
    }
    
    return false;
}

module.exports = Formation;