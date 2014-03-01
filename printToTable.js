;function printObjectInTable(objectToIterate, tableID) {
    var propertyOrder = getTHeadIDs(tableID);

    var numberOfProperties = propertyOrder.length;
    var sortedArray = [];

    var tr = document.createElement("tr");


    for(var i = 0; i < numberOfProperties; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
    }

    for (var prop in objectToIterate) {
        // important check that this is objects own property 
        // not from prototype prop inherited

        if (objectToIterate.hasOwnProperty(prop)) {
            var index = propertyOrder.indexOf(prop);
            if(index != -1){
                var text = document.createTextNode(objectToIterate[prop]);
                tr.getElementsByTagName("td")[index].appendChild(text);
            }
        }
    }

    document.getElementById(tableID).getElementsByTagName("tbody")[0].appendChild(tr);
}

function getTHeadIDs(tableID){
    var thChildren = document.getElementById(tableID).getElementsByTagName("th");   
    var childrenLength = thChildren.length;
    var tableHeadIDs = []
    for(var i = 0; i < childrenLength; i++){
        tableHeadIDs[i] = thChildren[i].id;
    }   

    return tableHeadIDs;
}