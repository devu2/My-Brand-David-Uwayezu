const signUpForm = document.getElementById('signupform');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const userEmail = document.getElementById('email');
const userName = document.getElementById('username');
const password = document.getElementById('passwordOne');
const passwordConfirmation = document.getElementById('passwordTwo');

signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    let firstNameValue =firstName.value.trim(); 
    let lastNameValue = lastName.value.trim(); 
    let userEmailValue = userEmail.value.trim(); 
    let userNameValue = userName.value.trim(); 
    let passwordValue = password.value.trim(); 
    let passwordConfirmationValue = passwordConfirmation.value.trim(); 


    if(firstNameValue === '')   {
        settingErrorFor(firstname,"This Field can't be blank!");
    }   else    {
        settingSuccess(firstname);
    }
    if(lastNameValue === '') {
        settingErrorFor(lastName, "This Field can't be blank!");
    } else{
        settingSuccess(lastName);
    }
    if(userEmailValue ===''){
        settingErrorFor(email,"This Field can't be blank!");

    } else if (!isThisEmail(userEmailValue)) {
        settingErrorFor(email,"You enter invalid Email!");

    } else {
        settingSuccess(email);
    }
    if(userNameValue === ''){
        settingErrorFor(username,"This Field can't be blank!");
    } else if (userNameValue.length < 4){
        settingErrorFor(username,"Username must be atleast 4 characters!");
    } else {
        settingSuccess(username);
    }
    if(passwordValue === ''){
        settingErrorFor(password,"This Field can't be blank!");
    } else {
        settingSuccess(password);
    }
    if(passwordConfirmationValue === ''){
        settingErrorFor(passwordConfirmation,"This Field can't be blank!");
    } else if(passwordConfirmationValue !== passwordValue){
        settingErrorFor(passwordConfirmation,"Passwords does not match!");
    } else {
        settingSuccess(passwordConfirmation);
    }
}
function settingErrorFor(input,message) {
    const form = input.parentElement;
    const small = form.querySelector('small');

    small.innerText = message;
    form.className = 'sign-up-form error';
}
function settingSuccess(input) {
    const form = input.parentElement;
    form.className = 'sign-up-form success';
}
function isThisEmail(email){
    return /^(([^<>()\[\]\\.,;:\$@"]+(\.[^<>()\[\]\\.,;:\$@"]+)*)|(",+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}