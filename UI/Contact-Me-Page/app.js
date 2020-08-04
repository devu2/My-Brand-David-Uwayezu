var firebaseConfig = {
  apiKey: "AIzaSyByzjRCzo0WCn_dJBAMOr6wYVd4yiSRv9Q",
  authDomain: "contactmeform-ec589.firebaseapp.com",
  databaseURL: "https://contactmeform-ec589.firebaseio.com",
  projectId: "contactmeform-ec589",
  storageBucket: "contactmeform-ec589.appspot.com",
  messagingSenderId: "579388975981",
  appId: "1:579388975981:web:0344a050e1d2e07c8a0864"
};
// Initialize Firebase
// var ref = new Firebase('https://contactmeform-ec589.firebaseio.com');
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
const sendBtn = document.querySelector('#button');
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject= document.querySelector("#subject");
let message = document.querySelector("#message"); 

const db = firestore.collection('messages');

sendBtn.addEventListener('click',function(){
  db.doc().set({
    Name: name.value,
    Email: email.value,
    Subject: subject.value,
    Message: message.value

  }).then(function(){
    window.alert("Your message successfully reach me, Thank you!");
  }).catch(function(error){
    window.alert(error);
  });
});