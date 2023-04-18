//manipulating the title of the page
/*const headerTitle = document.getElementById("header-title");
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
*/
//Traversing DOM
/*var itemList = document.querySelector('#items');
console.log(itemList);

//ParentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey';
console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#2548';
console.log(itemList.parentElement.parentElement.parentElement);

//ChildNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = '#6589';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'This first Element';
itemList.firstElementChild.style.backgroundColor = 'crimson';
itemList.lastElementChild.style.fontWeight = 'bold';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'This is last Item';
itemList.lastElementChild.style.fontWeight = 'bold';
itemList.lastElementChild.style.backgroundColor = 'grey';

//nextSibling
console.log(itemList.nextSibling);

//next Element Sibling
console.log(itemList.nextElementSibling); //print's null as there is no sibling

//PreviousSibling
console.log(itemList.previousSibling);

//next Element Sibling
console.log(itemList.previousElementSibling); */

//Creating element and adding Hello World before Item Listner
const newDiv = document.createElement('div');
console.log(newDiv);

//Add class & ID
newDiv.className = 'myClass';
newDiv.id = 'myId';

//Add attribute
newDiv.setAttribute('title','Creating Element');

//Create text node
var newDivText = document.createTextNode('Hello world');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = '30px'
container.insertBefore(newDiv,h1);

//Creating element and adding Hello Word before Item 1
const ul = document.getElementById('items');
const li = document.createElement('li');
li.style.fontSize = '25px';
li.style.backgroundColor = 'grey';

//Add class
li.className = 'list-group-item';
console.log(li);

//Create text node
var liText = document.createTextNode('I am a CODER');

//Add text to div
li.appendChild(liText);
ul.prepend(li);




