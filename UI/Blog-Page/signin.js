
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