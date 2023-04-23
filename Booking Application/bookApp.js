//
function getCallDetails(event){
    event.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('myEmail').value;
    const phoneNo = document.getElementById('myPhone').value;
    const date = document.getElementById('myDate').value;
    const time = document.getElementById('myTime').value;

    const randomId = Math.random().toString(16).slice(2); //Random key value pairs
    console.log(randomId);
    
    const myDetails = {
        Name : name,
        Email : email,
        PhoneNo : phoneNo,
        Date : date,
        Time : time,
        Id : randomId
    }
    localStorage.setItem(randomId,JSON.stringify(myDetails));
}