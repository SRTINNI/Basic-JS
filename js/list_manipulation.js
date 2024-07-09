// List Manipulation

document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addButton");
    var removeButton = document.getElementById("removeButton");
    var list = document.getElementById("list");

    addButton.addEventListener("click", function() {
        var newItem = document.createElement("li");
        newItem.textContent = "New item";
        list.appendChild(newItem);
    });

    removeButton.addEventListener("click", function() {
        var lastItem = list.lastElementChild;
        if (lastItem) {
            list.removeChild(lastItem);
        }
    });
});
