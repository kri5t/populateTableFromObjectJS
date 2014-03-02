/*
 * Generates a table row and populates it with the information from the object passed to the function.
 * After that adds the row to the table body of the table identified by the ID.
 */

;function printObjectInTable(objectToIterate, tableID) {
    var thChildren = document.getElementById(tableID).getElementsByTagName("th"),
        childrenLength = thChildren.length,
        numberOfProperties = thChildren.length,
        tr = document.createElement("tr");
    for (var i = 0; i < thChildren.length; i++) {
        var th = thChildren[i];
        // important check that this is objects own property 
        // not from prototype prop inherited
        var td = document.createElement("td");
        if (objectToIterate.hasOwnProperty(th.id)) {
            td.appendChild(document.createTextNode(objectToIterate[th.id]));
        }
        tr.appendChild(td);
    }
    document.getElementById(tableID).getElementsByTagName("tbody")[0].appendChild(tr);
}