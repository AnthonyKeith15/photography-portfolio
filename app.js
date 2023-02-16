'use strict'
let modelImages = [];
let abshirModels = [];
let artmodels = [];
let anthonymodels = [];
let modelArray = [];
// construction functions for Images- Silk
// Add alt text
function Images(name, alt, fileExtension = 'jpeg') {
  this.alt = alt
  this.name = name;
  this.src = `models/${name}.${fileExtension}`;
}

let afrione = new Images('afrione', 'neon image black woman')
let afritwo = new Images('afritwo','neon model with hand over face')
let afrithree = new Images('afrithree','neon model with afro side profile')
let afrifour = new Images('afrifour','pink background model side profile')
let afrifive = new Images('afrifive', 'hand gesture pink neon model')
let afrisix = new Images('afrisix', 'blue background model sitting')
let afriseven = new Images('afriseven','dark image model with sunglasses')
let afrieight = new Images('afrieight', 'pik image of model with glasses')
let abshirimg1 = new Images('abshirimg1', 'basketball Stadium neon', 'avif')
let abshirimg2 = new Images('abshirimg2', 'wall mural of Kobe Bryant', 'avif')
let abshirimg3 = new Images('abshirimg3', 'soccer stadium arsenal', 'avif')
let abshirimg4 = new Images('abshirimg4', 'baseball game daytime mariners', 'avif')
let abshirimg5 = new Images('abshirimg5', 'brooklyn nets kevin durant b&w', 'avif')
let abshirimg6 = new Images('abshirimg6', 'snowboarding daytime mountain', 'avif')
let abshirimg7 = new Images('abshirimg7', 'soccer field during game', 'avif')
let abshirimg8 = new Images('abshirimg8', 'paris protest crowd', 'avif')
let crossing = new Images('crossing', 'brids eye view people crossing', 'jpg')
let narrow = new Images('narrow', 'street night view', 'jpg')
let pagoda = new Images('pagoda', 'asian style architecture', 'jpg')
let purp = new Images('purp', 'night time street pink image', 'jpg')
let street = new Images('street', 'night time street view', 'jpg')
let talltower = new Images('talltower', 'street view at sunset', 'jpg')
let white = new Images('white', 'night alley asian', 'jpg')
let tower = new Images('tower', 'tower in the city daytime', 'jpg')
let art1 = new Images('art1', 'man sitting yellow image',  'jpg')
let art2 = new Images('art2', 'night time string lights alley', 'jpg')
let art3 = new Images('art3', 'mural of boba fet', 'jpg')
let art4 = new Images('art4', 'street view night time street light', 'jpg')
let art5 = new Images('art5', 'alley graffiti day time', 'jpg')
let art6 = new Images('art6', 'mural of two kids graffiti', 'jpg')
let art7 = new Images('art7', 'buildings in new york city day time', 'jpg')
let art8 = new Images('art8', 'alley graffiti day time ', 'jpg')


// function Nextimage (models);




artmodels = [art1, art2, art3, art4, art5, art6, art7, art8]
anthonymodels = [crossing, narrow, pagoda, purp, street, talltower, tower, white]
modelImages = [afrione, afritwo, afrithree, afrifour, afrifive, afrisix, afriseven, afrieight]
abshirModels = [abshirimg1, abshirimg2, abshirimg3, abshirimg4, abshirimg5, abshirimg6, abshirimg7, abshirimg8]


function Populatemodels() {
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
// check for local storage (use if statement to see if local storage exists)
// if local storage exists .getItem and JSON.parse local storage
// run confirmAppointment function passing in values as parameters


// Function for pop up
function openPopup() {
  popup.classList.toggle("open-popup");
}
function checkForLocalStorage() {
  let appointmentInfo = localStorage.getItem('formInfoToLocalStorage');
  if (appointmentInfo) {
    let parsedFormInfo = JSON.parse(appointmentInfo);
    confirmAppointment(parsedFormInfo[0], parsedFormInfo[1], parsedFormInfo[2], parsedFormInfo[3]);
 }

}

function confirmAppointment(name, email, photographer, date) {
  let reminder = document.getElementById('reminder');
  reminder.innerHTML = `${name}, your appointment with ${photographer} is on ${date}. We sent a confirmation email to ${email}`
}
  // Handle submit
  let handleSubmit = function (event) {

    event.preventDefault();
    let formName = (event.target.inputName.value);
    let formEmail = (event.target.email.value);
    let formPhotographer = (event.target.photographer.value);
    let formAppointment = (event.target.appointment.value);

    let formInfoArray = [formName, formEmail, formPhotographer, formAppointment];
 
    // Label Items
    let jsonFormName = JSON.stringify(formInfoArray);
    

    // Pack Items
    localStorage.setItem("formInfoToLocalStorage", jsonFormName);
  
  confirmAppointment(formName, formEmail, formPhotographer, formAppointment);
}


let okButton = document.getElementById('okbtn');
form.addEventListener('submit', handleSubmit);
okButton.addEventListener('click', openPopup);

let abshirSpan = document.getElementById('abshirModels');
let antSpan = document.getElementById('antmodels');
let moSpan = document.getElementById('myModels');
let artSpan = document.getElementById('artmodels');

let handleImageClick = function (event) {
  let thingClicked = event.target
  if (thingClicked.tagName === 'IMG') {
    thingClicked.classList.toggle('largeImage');
  }
}
checkForLocalStorage();
abshirSpan.addEventListener('click', handleImageClick);
antSpan.addEventListener('click', handleImageClick);
moSpan.addEventListener('click', handleImageClick);
artSpan.addEventListener('click', handleImageClick);
