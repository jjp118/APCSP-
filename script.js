var names = [];
var email = [];
var phone= [];
var addy = [];

//HTML Document methods and properties learned from w3schools.com

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');

var inputForm = document.getElementById('addForm');

inputForm.addEventListener("submit", function (event) {
    event.preventDefault();



    names.push(nameInput.value);
    email.push(emailInput.value);
    phone.push(phoneInput.value);
    addy.push(addressInput.value);
    console.log(names)
    inputForm.reset();

    renderItems();

})

var contacts = document.getElementById('contacts');


function renderItems(){
    contacts.innerHTML='';
    for(var i = 0; i < names.length; i++){
        var contact = document.createElement('div');
        contacts.append(contact);
        contact.setAttribute("class", "contact");
        contact.innerHTML = `
        <h1 class="info">Name: ${names[i]}</h1>
        <h1 class="info">Email: ${email[i]}</h1>
        <h1 class="info">Phone: ${phone[i]}</h1>
        <h1 class="info">Address: ${addy[i]}</h1>
        <button onclick="deleteContact(${i})"><h1 class="info">DELETE</h1></button>
        
        
        `;
        
        
        
        
    }
}

function deleteContact(item){
    names.splice(item, 1);
    email.splice(item, 1);
    phone.splice(item, 1);
    addy.splice(item, 1);
    renderItems();
}