'use strict'
let modelImages = [];
let abshirModels = [];
let artmodels = [];
let anthonymodels = [];
let modelArray = [];
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
let abshirimg1 = new Images('abshirimg1', 'avif')
let abshirimg2 = new Images('abshirimg2', 'avif')
let abshirimg3 = new Images('abshirimg3', 'avif')
let abshirimg4 = new Images('abshirimg4', 'avif')
let abshirimg5 = new Images('abshirimg5', 'avif')
let abshirimg6 = new Images('abshirimg6', 'avif')
let abshirimg7 = new Images('abshirimg7', 'avif')
let abshirimg8 = new Images('abshirimg8', 'avif')
let crossing = new Images('crossing', 'jpg')
let narrow = new Images('narrow', 'jpg')
let pagoda = new Images('pagoda', 'jpg')
let purp = new Images('purp', 'jpg')
let street = new Images('street', 'jpg')
let talltower = new Images('talltower', 'jpg')
let white = new Images('white', 'jpg')
let tower = new Images('tower', 'jpg')
let art1 = new Images('art1', 'jpg')
let art2 = new Images('art2', 'jpg')
let art3 = new Images('art3', 'jpg')
let art4 = new Images('art4', 'jpg')
let art5 = new Images('art5', 'jpg')
let art6 = new Images('art6', 'jpg')
let art7 = new Images('art7', 'jpg')
let art8 = new Images('art8', 'jpg')


// function Nextimage (models);




artmodels = [art1, art2, art3, art4, art5, art6, art7, art8]
anthonymodels = [crossing, narrow, pagoda, purp, street, talltower, tower, white]
modelImages = [afrione, afritwo, afrithree, afrifour, afrifive, afrisix, afriseven, afrieight]
abshirModels = [abshirimg1, abshirimg2, abshirimg3, abshirimg4, abshirimg5, abshirimg6, abshirimg7, abshirimg8]


function Populatemodels () {
let abshirimages = document.getElementById('abshirModels')

  for (let i = 0; i < abshirModels.length; i++) {
    let image = document.createElement('img')
    image.src = abshirModels[i].src
    abshirimages.appendChild(image)

}
let antimages = document.getElementById('antmodels')
console.log('bye')

for (let i = 0; i < anthonymodels.length; i++) {
  let image = document.createElement('img')
  image.src = anthonymodels[i].src
  antimages.appendChild(image)
}
let myModels = document.getElementById('myModels')

for (let i = 0; i < modelImages.length; i++) {
  let image = document.createElement('img')
  image.src = modelImages[i].src
myModels.appendChild(image)
}
let artimages = document.getElementById('artmodels')

for (let i = 0; i < artmodels.length; i++) {
  let image = document.createElement('img')
  image.src = artmodels[i].src
  artimages.appendChild(image)

  }
}
Populatemodels();

function confirmAppointment(name, email, photographer, date){
  let reminder = document.getElementById('reminder');
  reminder.innerHTML = `${name}, your appointment with ${photographer} is on ${date}. We sent a confirmation email to ${email}`
}
let handleSubmit = function(event) {
  event.preventDefault();
  let clientName = event.target.inputName.value;
  let clientEmail = event.target.email.value;
  let photographerChoice = event.target.photographer.value;
  let appointmentDate = event.target.appointment.value;
  confirmAppointment(clientName, clientEmail, photographerChoice, appointmentDate);
}
 
form.addEventListener('submit', handleSubmit);

let abshirSpan = document.getElementById('abshirModels');
let antSpan = document.getElementById('antmodels');
let moSpan = document.getElementById('myModels');
let artSpan = document.getElementById('artmodels');

let handleImageClick = function(event) {
  let thingClicked = event.target
  if(thingClicked.tagName === 'IMG'){
    thingClicked.classList.toggle('largeImage');
  }
}
abshirSpan.addEventListener('click', handleImageClick);
antSpan.addEventListener('click', handleImageClick);
moSpan.addEventListener('click', handleImageClick);
artSpan.addEventListener('click', handleImageClick);
