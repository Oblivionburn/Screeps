var Vector = require('Vector');
var GoTo = require('task.GoTo');

function Invade(creep, debug) 
{
    creep.memory.task = "Invading";
    
    var thisRoom = creep.room.name;
    var otherRoom = "";
    
    var exits = Game.map.describeExits(thisRoom);
    for (var exit in exits)
    {
        if (exit == TOP)
        {
            if (thisRoom.includes("N"))
            {
                var n_index = thisRoom.indexOf("N") + 1;
                var num = parseInt(thisRoom.substring(n_index, thisRoom.length)) + 1;
                otherRoom = thisRoom.substring(0, n_index) + num;
            }
            else if (thisRoom.includes("S"))
            {
                var n_index = thisRoom.indexOf("S") + 1;
                var num = parseInt(thisRoom.substring(n_index, thisRoom.length)) - 1;
                otherRoom = thisRoom.substring(0, n_index) + num;
            }
        }
        else if (exit == RIGHT)
        {
            if (thisRoom.includes("E"))
            {
                var e_index = thisRoom.indexOf("E") + 1;
                
                if (thisRoom.includes("N"))
                {
                    var n_index = thisRoom.indexOf("N");
                    var num = parseInt(thisRoom.substring(e_index, n_index)) + 1;
                    otherRoom = "E" + num + thisRoom.substring(n_index, thisRoom.length);
                }
                else if (thisRoom.includes("S"))
                {
                    var s_index = thisRoom.indexOf("S");
                    var num = parseInt(thisRoom.substring(e_index, s_index)) + 1;
                    otherRoom = thisRoom.substring(0, n_index) + num;
                }
            }
            else if (thisRoom.includes("W"))
            {
                var w_index = thisRoom.indexOf("W") + 1;
                
                if (thisRoom.includes("N"))
                {
                    var n_index = thisRoom.indexOf("N");
                    var num = parseInt(thisRoom.substring(w_index, n_index)) + 1;
                    otherRoom = thisRoom.substring(0, n_index) + num;
                }
                else if (thisRoom.includes("S"))
                {
                    var s_index = thisRoom.indexOf("S");
                    var num = parseInt(thisRoom.substring(w_index, s_index)) + 1;
                    otherRoom = thisRoom.substring(0, n_index) + num;
                }
            }
        }
        else if (exit == BOTTOM)
        {
            if (thisRoom.includes("N"))
            {
                var n_index = thisRoom.indexOf("N") + 1;
                var num = parseInt(thisRoom.substring(n_index, thisRoom.length)) - 1;
                otherRoom = thisRoom.substring(0, n_index) + num;
            }
            else if (thisRoom.includes("S"))
            {
                var n_index = thisRoom.indexOf("S") + 1;
                var num = parseInt(thisRoom.substring(n_index, thisRoom.length)) + 1;
                otherRoom = thisRoom.substring(0, n_index) + num;
            }
        }
        else if (exit == LEFT)
        {
            if (thisRoom.includes("E"))
            {
                var n_index = thisRoom.indexOf("E") + 1;
                var num = parseInt(thisRoom.substring(n_index, thisRoom.length)) - 1;
                otherRoom = thisRoom.substring(0, n_index) + num;
            }
            else if (thisRoom.includes("W"))
            {
                var n_index = thisRoom.indexOf("W") + 1;
                var num = parseInt(thisRoom.substring(n_index, thisRoom.length)) + 1;
                otherRoom = thisRoom.substring(0, n_index) + num;
            }
        }
        
        var exitDir = Game.map.findExit(thisRoom, otherRoom);
        var exit = creep.pos.findClosestByRange(exitDir);
        if (exit != null &&
            Game.map.isRoomAvailable(otherRoom))
        {
            
            var location = new Vector(exit.x, exit.y);
            GoTo(creep, location, creep.memory.task, debug);
            return true;
        }
    }
    
    return false;
}

module.exports = Invade;