function GetAdjacentRoom(direction, w_e, w_e_num, n_s, n_s_num)
{
    let roomName = "";
    
    if (direction == TOP)
    {
        roomName = w_e + w_e_num + n_s;
        if (n_s == "N")
        {
            roomName += (n_s_num + 1);
        }
        else
        {
            roomName += (n_s_num - 1);
        }
    }
    else if (direction == RIGHT)
    {
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
    }
    else if (direction == BOTTOM)
    {
        roomName = w_e + w_e_num + n_s;
        if (n_s == "N")
        {
            roomName += (n_s_num - 1);
        }
        else
        {
            roomName += (n_s_num + 1);
        }
    }
    else if (direction == LEFT)
    {
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
    }
    
    return roomName;
}

module.exports = GetAdjacentRoom;