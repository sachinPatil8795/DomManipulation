//manipulating the title of the page
const headerTitle = document.getElementById("header-title");
console.log(headerTitle);

const head = document.getElementById("main-header");
console.log(head);

// headerTitle.innerHTML = '<h3>Love Coding</h3>';
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'I am a CODER';

//styling title
headerTitle.style.borderBottom = "solid 3px #000";

//Styling Add Item
const item = document.getElementById("addItem");
item.style.fontWeight = "bold";
item.style.color = "green";

//Styling list-elements with getElementByClassName
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].style.backgroundColor = "yellow";

//Adding styling to array of elements with className
for (let i = 0; i < items.length; i++) {
  // item[i].style.backgroundColor = 'violet';
  items[i].style.color = "blue";
  items[i].style.fontWeight = "bold";
}

//Styling List-Items using ElementsByTagName
var listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[1]);
listItems[1].style.backgroundColor = "purple";

//Making 3rd element background Color green
listItems[2].style.backgroundColor = "green";

//making all the elements in the list have bold color font
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = "bold";
  listItems[i].style.color = "black";
  listItems[i].style.backgroundColor = "grey";
}

//QuerySelector
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";
secondItem.style.color = 'crimson';

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.visibility = "hidden"; //invisble item-3

//QuerySelectorAll
var odd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#000";
  odd[i].style.color = 'white';
}
