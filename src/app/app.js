
var objUser = {
    email:"",
    password: "",
}

function registerUser(){
var firstname = document.getElementById('firstname');
var surname = document.getElementById('surname');
var email = document.getElementById( 'email');
var password = document.getElementById( 'password');
var city = document.getElementById('city');
var state = document.getElementById('state');
var zip = document.getElementById('zip');
var newUser ={
    firstname: firstname,
    surname: surname,
    email: email,
    password: password,
    city: city,
    state: state,
    zip: zip,
}

    objUser.push(newUser)
    console.log(objUser)
}


function store() {
    localStorage.setItem('firstname', firstname.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('state', state.value);
    localStorage.setItem('zip', zip.value);
}

function check(){
    var storedFirstname = localStorage.getItem('firstname');
    var storedSurname = localStorage.getItem('surname');
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var storedCity = localStorage.getItem('city');
    var storedState = localStorage.getItem('state');
    var storedZip = localStorage.getItem('zip');

    var userEmail = document.getElementById('userEmail');
    var userPassword = document.getElementById('userPassword');

    if(userEmail.value == storedEmail && userPassword.value == storedPassword) {
        alert('Você está logado.');
    }else {
        alert('ERROR');
    }


}


