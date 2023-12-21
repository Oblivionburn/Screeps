/*
    Used by:
        handle.Building
        handle.Towers
        util.GetTransferTarget
*/

function GetStructures(allStructures, name)
{
    let structures = [];
    
    const structureCount = allStructures.length;
    
    for (let i = 0; i < structureCount; i++)
    {
        const structure = allStructures[i];
        if ((name == "spawn" && structure.structureType == STRUCTURE_SPAWN) ||
            (name == "extension" && structure.structureType == STRUCTURE_EXTENSION) ||
            (name == "road" && structure.structureType == STRUCTURE_ROAD) ||
            (name == "link" && structure.structureType == STRUCTURE_LINK) ||
            (name == "storage" && structure.structureType == STRUCTURE_STORAGE) ||
            (name == "tower" && structure.structureType == STRUCTURE_TOWER) ||
            (name == "extractor" && structure.structureType == STRUCTURE_EXTRACTOR) ||
            (name == "lab" && structure.structureType == STRUCTURE_LAB) ||
            (name == "container" && structure.structureType == STRUCTURE_CONTAINER))
        {
            structures.push(structure);
        }
    }

    return structures;
}

module.exports = GetStructures;