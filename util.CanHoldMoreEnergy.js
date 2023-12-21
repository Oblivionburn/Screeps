/*
    Used by:
        ai.GetTask
        task.Transfer
        util.GetTransferTarget
*/

function CanHoldMoreEnergy(thing)
{
    if (thing.store != null)
    {
        return thing.store[RESOURCE_ENERGY] < thing.store.getCapacity(RESOURCE_ENERGY);
    }
    
    return false;
}

module.exports = CanHoldMoreEnergy;