const form = document.getElementById('form');



form.addEventListener('submit', e => {
    e.preventDefault();

    const firstname =form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password =form['password'].value;

if(firstname === '') {
    addErrorTo('firstname','FirstName is required.')
}else {
    removeErrorFrom('firstname');
}
if(lastName === '') {
    addErrorTo('lastname','LastName is required.')
}
else {
    removeErrorFrom('lastname');
}
if(email === '') {
    addErrorTo('email','Email is required.')
}
else {
    removeErrorFrom('email'); 
}

if(isValid(email)) {
    addErrorTo('Email','Email is required.');
}

if(password === '') {
    addErrorTo('password','Password is required.');
}else {
    removeErrorFrom('password');
 }




});

function addErrorTo(field,message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small =formControl.querySelector('small')
    small.innerHTML = message;
    small.style.opacity = '1';
}

function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());

}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    
    const small = formControl.querySelector('small');
    small.innerHTML = '';
    small.opacity =0;
}