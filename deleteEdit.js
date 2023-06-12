var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add item function
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;
  var newItem2 = document.getElementById("item-description").value;

  // Create new li element
  var li = document.createElement("li");

  // Add class to li
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));

  // Create delete button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  //Creating Edit button
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-info btn-sm float-right";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // Get list
  var items = itemList.getElementsByTagName("li");

  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  //filter item based on description

  // convert text to lowercase
  var text1 = e.target.value.toLowerCase();

  // Get list
  var itemDescription = itemList.getElementsByTagName("li");
  console.log({ itemDescription: itemDescription });
  // Convert to an array
  Array.from(itemDescription).forEach(function (item1) {
    var itemNameDes = item1.textContent;

    if (itemNameDes.toLowerCase().indexOf(text1) != -1) {
      item1.style.display = "block";
    } else {
      item1.style.display = "none";
    }
  });
}
