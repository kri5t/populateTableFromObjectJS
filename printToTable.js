/*
 * Generates table rows and populates them with the information from the object passed to the function
 * and adds the rows to the table body of the table identified by the ID.
 */

;function printObjectInTable(objectToIterate, tableID) {
    var propertyOrder = getTHeadIDs(tableID),
        numberOfProperties = propertyOrder.length,
        tr = document.createElement("tr");

    for (var prop in propertyOrder) {
        // important check that this is objects own property 
        // not from prototype prop inherited
        var td = document.createElement("td");
        if (objectToIterate.hasOwnProperty(prop)) {
            td.appendChild(document.createTextNode(objectToIterate[prop]));
        }
        tr.appendChild(td);
    }
    document.getElementById(tableID).getElementsByTagName("tbody")[0].appendChild(tr);
}

/*
 * Generates an array of the table header IDs. Used to know where to put the properties of the object.
 * returns - the array of table header IDs.
 */
function getTHeadIDs(tableID){
    var thChildren = document.getElementById(tableID).getElementsByTagName("th"),
        childrenLength = thChildren.length,
        tableHeadIDs = []
    for(var i = 0; i < childrenLength; i++){
        tableHeadIDs[i] = thChildren[i].id;
    }   
    return tableHeadIDs;
}