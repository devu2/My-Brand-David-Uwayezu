const contactForm = document.getElementById("contactForm");
let isError = true;
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    checkInputs();
});

function checkInputs(){
    let nameValue =name.value.trim() || ''; 
    let emailValue = email.value.trim() || ''; 
    let subjectlValue = subject.value.trim() || ''; 
    let messageValue = message.value.trim() || ''; 
    
    
    

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
    
    
}

function settingErrorFor(input,message) {
    isError = true;

    const form = input.parentElement;
    const small = form.querySelector('small');

    small.innerText = message;
    form.className = 'contact-form error';
}
function settingSuccess(input) {
    isError = false;
    const form = input.parentElement;
    form.className = 'contact-form success';
}
function isThisEmail(email){
    return /^(([^<>()\[\]\\.,;:\$@"]+(\.[^<>()\[\]\\.,;:\$@"]+)*)|(",+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




var firebaseConfig = {
    apiKey: "AIzaSyByzjRCzo0WCn_dJBAMOr6wYVd4yiSRv9Q",
    authDomain: "contactmeform-ec589.firebaseapp.com",
    databaseURL: "https://contactmeform-ec589.firebaseio.com",
    projectId: "contactmeform-ec589",
    storageBucket: "contactmeform-ec589.appspot.com",
    messagingSenderId: "579388975981",
    appId: "1:579388975981:web:0344a050e1d2e07c8a0864"
};
firebase.initializeApp(firebaseConfig);
  
var firestore = firebase.firestore();
const sendBtn = document.querySelector('#button');
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject= document.querySelector("#subject");
let message = document.querySelector("#message"); 
  
const db = firestore.collection('messages');
  
sendBtn.addEventListener('click',function(){
    if(isError === false){
      db.doc().set({
        Name: name.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value
    
      }).then(function(){
        window.alert("Your message successfully reaches me, Thank you!");
      }).catch(function(error){
        window.alert(error);
      });
    } else{
      window.alert("Please fill below information!");
  
    }
    
});