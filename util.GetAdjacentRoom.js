function GetAdjacentRoom(direction, w_e, w_e_num, n_s, n_s_num)
{
    let roomName = "";
    
    switch (direction)
    {
        case TOP:
            roomName = w_e + w_e_num + n_s;
            if (n_s == "N")
            {
                roomName += (n_s_num + 1);
            }
            else
            {
                roomName += (n_s_num - 1);
            }
            break;
            
        case RIGHT:
            roomName = w_e;
            if (w_e == "W")
            {
                roomName += (w_e_num - 1);
            }
            else
            {
                roomName += (W_E_num + 1);
            }
            roomName += n_s + n_s_num;
            break;
            
        case BOTTOM:
            roomName = w_e + w_e_num + n_s;
            if (n_s == "N")
            {
                roomName += (n_s_num - 1);
            }
            else
            {
                roomName += (n_s_num + 1);
            }
            break;
            
        case LEFT:
            roomName = w_e;
            if (w_e == "W")
            {
                roomName += (w_e_num + 1);
            }
            else
            {
                roomName += (W_E_num - 1);
            }
            roomName += n_s + n_s_num;
            break;
    }
    
    return roomName;
}

module.exports = GetAdjacentRoom;