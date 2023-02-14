'use strict'
let inputName = document.getElementById("name")
let inputEmail = document.getElementById("email")
let inputPhotographer = document.getElementById("photographer")
let inputAppointment = document.getElementById("appointment");






localStorage.setItem("name", inputName.value);
localStorage.setItem("email", inputEmail.value);
localStorage.setItem("name", inputPhotographer.value);
localStorage.setItem("appointment", inputAppointment.value);


let form = document.querySelector('form');
let handleSubmit = function(event){
  event.preventDefault();
let inputName = (event.target.inputName.value);
let inputEmail = (event.target.inputEmail.value);
let inputPhotographer = (event.target.inputPhotographer.value);
let inputAppointment = (event.target.inputAppointment.value);
}
form.addEventListener('submit', handleSubmit);

console.log(email);
console.log('name');
console.log('photographer')
console.log(inputName);