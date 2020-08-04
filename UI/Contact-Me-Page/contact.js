
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
const contactForm = document.getElementById("contactForm");



contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    checkInputs();
});

function checkInputs(){
    let nameValue =name.value.trim(); 
    let emailValue = email.value.trim(); 
    let subjectlValue = subject.value.trim(); 
    let messageValue = message.value.trim(); 
    
    
    

    if(nameValue === '')   {
        settingErrorFor(name,"This Field can't be blank!");
    }   else    {
        settingSuccess(name);
    }
    
    if(emailValue ===''){
        settingErrorFor(email,"This Field can't be blank!");

    } else if (!isThisEmail(emailValue)) {
        settingErrorFor(email,"You entered invalid Email format!");

    } else {
        settingSuccess(email);
    }
    if(subjectlValue === ''){
        settingErrorFor(subject,"This Field can't be blank!");
    } else if (subjectlValue.length < 12){
        settingErrorFor(subject,"Subject must be atleast 12 characters long!");
    } else {
        settingSuccess(subject);
    }
    if(messageValue === ''){
        settingErrorFor(message,"This Field can't be blank!");
    } else if (messageValue.length < 40) {
        settingErrorFor(message,"Message must be atleast 40 characters long!");
    }
     else {
        settingSuccess(message);
    }
    // savingContactMessage(nameValue,emailValue,subjectlValue,messageValue);
    
}
// function savingContactMessage(nameValue,emailValue,subjectlValue,messageValue){
//     var newContactMeMessagesRef = contactMeMessagesRef.push();
//     newContactMeMessagesRef.set({
//         name: nameValue,
//         email: emailValue,
//         subject: subjectlValue,
//         message: messageValue
//     });

// }
function settingErrorFor(input,message) {
    const form = input.parentElement;
    const small = form.querySelector('small');

    small.innerText = message;
    form.className = 'contact-form error';
}
function settingSuccess(input) {
    const form = input.parentElement;
    form.className = 'contact-form success';
}
function isThisEmail(email){
    return /^(([^<>()\[\]\\.,;:\$@"]+(\.[^<>()\[\]\\.,;:\$@"]+)*)|(",+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
