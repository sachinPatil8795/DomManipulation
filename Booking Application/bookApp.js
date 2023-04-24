//Getting all the details
function getCallDetails(event) {
  event.preventDefault();
  const name = document.getElementById("fname").value;
  const email = document.getElementById("myEmail").value;
  const phoneNo = document.getElementById("myPhone").value;
  const date = document.getElementById("myDate").value;
  const time = document.getElementById("myTime").value;

  const randomId = Math.random().toString(16).slice(2); //Random key value pairs
  console.log(randomId);

  const myDetails = {
    Name: name,
    Email: email,
    PhoneNo: phoneNo,
    Date: date,
    Time: time,
    Id: randomId,
  };
  localStorage.setItem(randomId, JSON.stringify(myDetails));
}

function getAllkeys(){
  const myKey = Object.keys(localStorage);
  return myKey;
  
}

//Display the content of the local storage on an HTML page
function DisplayKeyValue(){
  const myValues = getAllkeys();
  const ul = document.getElementById('myVal');
  

  for(let i = 0; i < myValues.length; i++){
    const val = JSON.parse(localStorage.getItem(myValues[i]));
    const li = document.createElement('li');

    li.innerHTML = `${val.Name} ${val.Email} ${val.PhoneNo} ${val.Date} ${val.Time}`
    ul.appendChild(li);
    
  }
}
DisplayKeyValue();
