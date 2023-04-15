//manipulating the title of the page 
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);

const head = document.getElementById('main-header');
console.log(head);

// headerTitle.innerHTML = '<h3>Love Coding</h3>';
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'I am a CODER';

//styling title
headerTitle.style.borderBottom = 'solid 3px #000';

//Styling Add Item
const item = document.querySelector('.title');
item.style.fontWeight = 'bold';
item.style.color = 'green';
