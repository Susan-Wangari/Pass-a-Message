//selecting elements
const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');

//event listener
send.addEventListener('click', deliverMessage);

//creating the function
function deliverMessage() {
    let textValue = text.value;
    message.innerHTML = "<b>></b>" + textValue; 
}