
// select element and asign then to variable
let form = document.querySelector('form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm_password');
let letter = document.querySelector('#letter');
let capital = document.querySelector('#capital');
let number = document.querySelector('#number');
let characterslength = document.querySelector('#characters');


form.addEventListener('submit', function(event) {
     event.preventDefault();
     checkinputs();
})


password.addEventListener('keyup', function(){
     validate(password.value);
})

function validate(psw){
     //letters
     if(psw.match(/[a-z]/)){
          valid(letter)
     }else {
          invalid(letter)
     }

     // length of Characters
     if(psw.length >= 8){
          valid(characterslength)
     }else {
          invalid(characterslength)
     }

     // capital letter
     if(psw.match(/[A-Z]/)){
          valid(capital)
     }else {
          invalid(capital)
     }
     // capital letter
     if(psw.match(/[0-9]/)){
          valid(number)
     }else {
          invalid(number)
     }
}

// valid message of typing message
function valid(id){
     id.classList.remove("invalid")
     id.classList.add("valid")
     id.firstChild.classList.remove("fa-times")
     id.firstChild.classList.add("fa-check")
}
// invalid message of typing message
function invalid(id){
     id.classList.remove("valid")
     id.classList.add("invalid")
     id.firstChild.classList.add("fa-times")
     id.firstChild.classList.remove("fa-check")
}

 
// copy password
confirm_password.addEventListener("paste", function(){
     setErrorFun(confirm_password, "Copy past not allow");
})
 
 
let checkinputs = function() {

     let usernameVal = username.value.trim();
     let emailVal = email.value.trim();
     let passwordVal = password.value.trim();
     let confirm_passwordVal = confirm_password.value.trim();
     
     // Username Validation
     if(usernameVal === ""){
          setErrorFun(username, 'Username is required');
     }else {
          setSuccessFun(username);
     }

     // Email validation
     if(emailVal === ""){
          setErrorFun(email, 'Email is required');
     }else if(!isEmail(emailVal)){
          setErrorFun(email, 'Email is not valid');
     }else {
          setSuccessFun(email)
     }

     // Password Validation
     if(passwordVal === ""){
          setErrorFun(password, 'Password is required');
     }else if(passwordVal.length < 8){
          setErrorFun(password, 'Password Minimum Length must be 8 characters');
     }else if(!(passwordVal.match(/[A-Z]/))){
          setErrorFun(password, 'At least one capital letter');
     }else if(!(passwordVal.match(/[0-9]/))){
          setErrorFun(password, 'At least one number');
     }else if(!(passwordVal.match(/[a-z]/))){
          setErrorFun(password, 'At least one small letter');
     }
     else {
          setSuccessFun(password)
     }
     
     // confirm password
     if(confirm_passwordVal === ""){
          setErrorFun(confirm_password, 'Confirm password is required');
     }else if(passwordVal !== confirm_passwordVal){
          setErrorFun(confirm_password, 'Password & confirm password are not match');
     }else {
          setSuccessFun(confirm_password)
     }
  
}

// error message function
let setErrorFun = (input, message) => {
     const formControl = input.parentNode
     const small = formControl.querySelector('small')
     formControl.className = "form-control error" 
     small.innerText = message
}
// success message function
let setSuccessFun = (input) => {
     const formControl = input.parentNode
     formControl.className = "form-control success"
     const small = formControl.querySelector('small')
     small.innerText = ""
}
// email regex 
let isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

 
// form into js
let passfocus = document.querySelector('#password');
let forminfo = document.querySelector('#form-info-id');
passfocus.addEventListener('focus', ()=> {
     forminfo.className = "form-info";
})
passfocus.addEventListener('blur', ()=> {
     forminfo.className = "form-info hide";
})
forminfo.className = "form-info hide";

// form info js