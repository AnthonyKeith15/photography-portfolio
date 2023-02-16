'use strict'
// let imageHolder = document.getElementById('neonAfrica')
// let image1 = document.getElementById('afrione');
// let image2 = document.getElementById('afritwo');
// let image3 = document.getElementById('afrithree');
// let image4 = document.getElementById('afrifour');
// let image5 = document.getElementById('afrifive');
// let image6 = document.getElementById('afrisix');
// let image7 = document.getElementById('afriseven');
// let image8 = document.getElementById('afrieight')
// let allImages = [];
// // construction functions for Images- Silk

// function Images(name, fileExtension = 'jpeg') {
//   this.name = name;
//   this.src = `models/${name}.${fileExtension}`;

// }

// let afrione = new Images('afrione')
// let afritwo = new Images('afritwo')
// let afrithree = new Images('afrithree')
// let afrifour = new Images('afrifour')
// let afrifive = new Images('afrifive')
// let afrisix = new Images('afrisix')
// let afriseven = new Images('afriseven')
// let afrieight = new Images('afrieight')

// allImages = [afrione, afritwo, afrithree]
// image1.src = afrione.src
// image2.src = afritwo.src
// image3.src = afrithree.src
// image4.src = afrifour.src
// image5.src = afrifive.src
// image6.src = afrisix.src
// image7.src = afriseven.src
// image8.src = afrieight.src

// Global Variables
let formName;
let formEmail;
let formPhotographer;
let formAppointment;
console.log('formName',formName);
console.log('formEmail',formEmail);
// local storage form

// Grab Item From DOM
let inputName = document.getElementById("inputName")
let inputEmail = document.getElementById("email")
let inputPhotographer = document.getElementById("photographer")
let inputAppointment = document.getElementById("appointment");
let form = document.getElementById('form');
let okButton = document.getElementById('okbtn');
console.log(form);
// Grab item from dom for pop up
let popup = document.getElementById("popup");

// Function for pop up
function openPopup(){
  popup.classList.toggle("open-popup");
}
// function closePopup(){
//   popup.classList.remove("open-popup");
// }

// Handle submit
let handleSubmit = function(event){
  console.log(event);
  event.preventDefault();
  formName = (event.target.inputName.value);
  formEmail = (event.target.email.value);
  formPhotographer = (event.target.photographer.value);
  formAppointment = (event.target.appointment.value);
  console.log('formName',formName);
  console.log('formEmail',formEmail);
  
  // Label Items
  let jsonFormName = JSON.stringify(formName);
  console.log('jsonName',jsonFormName);
  let jsonFormEmail = JSON.stringify(formEmail);
  console.log("jsonEmail",email);
  let jsonFormPhotographer = JSON.stringify(formPhotographer)
  let jsonFormAppointment = JSON.stringify(formAppointment)
  
  // Pack Items
  localStorage.setItem("inputName", jsonFormName);
  localStorage.setItem("email", jsonFormEmail);
  localStorage.setItem("photographer", jsonFormPhotographer);
  localStorage.setItem("appointment", jsonFormAppointment);
}
form.addEventListener('submit', handleSubmit);
okButton.addEventListener('click', openPopup);


// console.log(email);
// console.log('name');
// console.log('photographer')
// console.log(inputName);
