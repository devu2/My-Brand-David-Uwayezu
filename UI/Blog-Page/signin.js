// var firebaseConfig = {
//   apiKey: "AIzaSyCy9uDexCPP-q59D-hXWVL5U9ZNrc95or0",
//   authDomain: "blogs-a739f.firebaseapp.com",
//   databaseURL: "https://blogs-a739f.firebaseio.com",
//   projectId: "blogs-a739f",
//   storageBucket: "blogs-a739f.appspot.com",
//   messagingSenderId: "923325626235",
//   appId: "1:923325626235:web:5154555babe765e0acafde"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);



firebase.auth.Auth.Persistence.LOCAL;

document.querySelector('#signInBtn').addEventListener('click',function(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(email !== "" && password !== ""){
        let result = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Message: " + errorMessage);
        });

    }   else{
        window.alert("Please fill out all below field!");
    }
})