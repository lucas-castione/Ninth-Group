var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function logon(){
   
    if(input_email.value == 'adm@ninthgroup.com' && input_pass.value == '123456789'){
        window.location.href ='../grafico.html';
    }else{
        alert('login ou senha incorretos');
    }
}