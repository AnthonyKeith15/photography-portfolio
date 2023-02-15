'use strict'
let imageHolder = document.getElementById('Models')
let image1 = document.getElementById('modelOne');
let image2 = document.getElementById('modelTwo');
let image3 = document.getElementById('modelThree');
let image4 = document.getElementById('modelFour');
let image5 = document.getElementById('modelFive');
let image6 = document.getElementById('modelSix');
let image7 = document.getElementById('modelSeven');
let image8 = document.getElementById('modelEight')
let modelImages = [];
// construction functions for Images- Silk

function Images(name, fileExtension = 'jpeg') {
  this.name = name;
  this.src = `models/${name}.${fileExtension}`;

}

let afrione = new Images('afrione')
let afritwo = new Images('afritwo')
let afrithree = new Images('afrithree')
let afrifour = new Images('afrifour')
let afrifive = new Images('afrifive')
let afrisix = new Images('afrisix')
let afriseven = new Images('afriseven')
let afrieight = new Images('afrieight')

modelImages = [afrione, afritwo, afrithree, afrifour, afrifive, afrisix, afriseven, afrieight]
image1.src = afrione.src
image2.src = afritwo.src
image3.src = afrithree.src
image4.src = afrifour.src
image5.src = afrifive.src
image6.src = afrisix.src
image7.src = afriseven.src
image8.src = afrieight.src

// for (let i = 0; i < modelImages.length; i++);

let inputName = document.getElementById("name")
let inputEmail = document.getElementById("email")
let inputPhotographer = document.getElementById("photographer")
let inputAppointment = document.getElementById("appointment");






localStorage.setItem("name", inputName.value);
localStorage.setItem("email", inputEmail.value);
localStorage.setItem("name", inputPhotographer.value);
localStorage.setItem("appointment", inputAppointment.value);


let form = document.querySelector('form');

function confirmAppointment(name, email, photographer, date){
  let reminder = document.getElementById('reminder');
  let confirmation = document.createElement('p')
  confirmation.innerHTML = `${name}, your appointment with ${photographer} is on ${date}. We sent a confirmation email to ${email}`
  reminder.appendChild(confirmation);
}
let handlSubmit = function(event) {
  event.preventDefault();
  let clientName = event.target.name.value;
  let clientEmail = event.target.email.value;
  let photographerChoice = event.target.photographer.value;
  let appointmentDate = event.target.appointment.value;
  confirmAppointment(clientName, clientEmail, photographerChoice, appointmentDate);
}

form.addEventListener('submit', handlSubmit);
