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
const item = document.querySelector(".title");
item.style.fontWeight = "bold";
item.style.color = "green";

var items = document.getElementsByClassName("list-group-item");
console.log(items);

//Styling List-Items
var listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[1]);

//Making 3rd element background Color green
listItems[2].style.backgroundColor = "green";

//making all the elements in the list have bold color font
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = "bold";
}
