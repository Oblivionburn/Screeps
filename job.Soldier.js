/*
    Used by:
        handle.Creeps
*/

const GetTask = require("ai.GetTask");
const Attack = require("task.Attack");
const Wander = require("task.Wander");

function Soldier(creep) 
{
    const task = GetTask(creep);
    if (task != null)
    {
        if (task.Name == "Attack")
        {
            Attack(creep, task.Target);
        }
        else if (task.Name == "Wander")
        {
            Wander(creep);
        }
    }
}

module.exports = Soldier;