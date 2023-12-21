/*
    Used by:
        handle.Spawns
*/

const GetSpawnTemplate = require("util.GetSpawnTemplate");
const GetSpawnCost = require("util.GetSpawnCost");
const GetName = require("util.GetName");
const CleanMemory = require("util.CleanMemory");

function SpawnCreep(spawn, job)
{
    const body = [];
    let result = 0;
    
    if (spawn.spawning == null)
    {
        const template = GetSpawnTemplate(job);
        const templatePartCount = template.length;
        
        const templateCost = GetSpawnCost(template);
        const templateAmount = Math.floor(spawn.room.energyAvailable / templateCost);
        
        for (let a = 0; a < templateAmount; a++)
        {
            for (let p = 0; p < templatePartCount; p++)
            {
                const part = template[p];
                body.push(part);
            }
        }
        
        if (body.length > 0)
        {
            const cost = GetSpawnCost(body);
            
            if (cost <= spawn.room.energyAvailable)
            {
                CleanMemory();
                
                result = spawn.spawnCreep(body, GetName(job), 
                {
                    memory: 
                    {
                        home: spawn.room.name,
                        job: job,
                        task: null
                    }
                });
            }
            
            if (result < 0)
            {
                console.log("Error for " + spawn.name + ": " + GetError(result));
            }
            else
            {
                console.log(spawn.name + " spawned: " + job + " for " + cost + " energy.");
            }
        }
    }
}

module.exports = SpawnCreep;