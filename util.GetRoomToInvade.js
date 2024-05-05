const GetAdjacentRoom = require("util.GetAdjacentRoom");
const GetStructures = require("util.GetStructures");

function GetRoomToInvade(currentRoom)
{
    let adjacentRooms = {};
    let possibleRooms = [];
    let currentRoomName = currentRoom.name;
    
    //Parse room name
    let w_e = currentRoomName.substring(0, 1);
    
    let n_s = "N";
    if (currentRoomName.includes("S"))
    {
        n_s = "S";
    }
    
    let index = currentRoomName.indexOf(n_s);
    let w_e_num = Number(currentRoomName.substring(1, index));
    let n_s_num = Number(currentRoomName.substring(index + 1, currentRoomName.length));
    
    //Get adjacent rooms
    let topRoom = GetAdjacentRoom(TOP, w_e, w_e_num, n_s, n_s_num);
    if (topRoom != "")
    {
        adjacentRooms[topRoom] = FIND_EXIT_TOP;
    }
    
    let rightRoom = GetAdjacentRoom(RIGHT, w_e, w_e_num, n_s, n_s_num);
    if (rightRoom != "")
    {
        adjacentRooms[rightRoom] = FIND_EXIT_RIGHT;
    }
    
    let bottomRoom = GetAdjacentRoom(BOTTOM, w_e, w_e_num, n_s, n_s_num);
    if (bottomRoom != "")
    {
        adjacentRooms[bottomRoom] = FIND_EXIT_BOTTOM;
    }
    
    let leftRoom = GetAdjacentRoom(LEFT, w_e, w_e_num, n_s, n_s_num);
    if (leftRoom != "")
    {
        adjacentRooms[leftRoom] = FIND_EXIT_LEFT;
    }
    
    //const adjacentCount = Object.keys(adjacentRooms).length;
    Object.keys(adjacentRooms).forEach(function (key)
    {
        const roomName = key;
        const roomDirection = adjacentRooms[key];
        
        const direction = currentRoom.findExitTo(roomName);
        if (direction != ERR_NO_PATH &&
            direction != ERR_INVALID_ARGS &&
            direction == roomDirection)
        {
            let otherRoom = null;
            let alreadyOwnRoom = false;
            for (let visibleRoom in Game.rooms)
            {
                otherRoom = Game.rooms[visibleRoom];
                
                if (otherRoom.name == roomName &&
                    otherRoom.controller &&
                    otherRoom.controller.my &&
                    GetStructures(otherRoom, "spawn").length > 0)
                {
                    alreadyOwnRoom = true;
                    break;
                }
            }
            
            if (!alreadyOwnRoom &&
                otherRoom &&
                otherRoom.controller)
            {
                possibleRooms.push(roomName);
            }
        }
    });
    
    if (possibleRooms.length > 0)
    {
        return possibleRooms[0];
    }
    
    return null;
}

module.exports = GetRoomToInvade;