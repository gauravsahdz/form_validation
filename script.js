let username = document.getElementById("name");
let password = document.getElementById("pass");

let usernameWarning = document.getElementById("usernameWarning");
let passwordWarning = document.getElementById("passwordWarning");

let status = document.getElementById("status");

function ifEmpty(){
    if(username.value == ""){
        usernameWarning.textContent = "username is empty";    
    }
    else if(username.value.length <= 7){
        usernameWarning.textContent = "username must be 8 characters";
    }
    
    if(password.value == ""){
        passwordWarning.textContent = "password is empty";
    }
    else if(password.value.length <= 7){
        passwordWarning.textContent = "password must be 8 characters";
    }

    if(username.value.length >= 8 && password.value.length >= 8){
        status.textContent = "Submitted succesfully";
    }
    return false;
}

