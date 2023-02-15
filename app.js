'use strict'

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