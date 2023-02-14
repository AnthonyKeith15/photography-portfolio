'use strict'

let imageHolder = document.getElementById('neonAfrica')
let image1 = document.getElementById('afrione');
let image2 = document.getElementById('afritwo');
let image3 = document.getElementById('afrithree');
let image4 = document.getElementById('afrifour');
let image5 = document.getElementById('afrifive');
let image6 = document.getElementById('afrisix');
let image7 = document.getElementById('afriseven');
let image8 = document.getElementById('afrieight')
let allImages = [];
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

allImages = [afrione, afritwo, afrithree]
image1.src = afrione.src
image2.src = afritwo.src
image3.src = afrithree.src
image4.src = afrifour.src
image5.src = afrifive.src
image6.src = afrisix.src
image7.src = afriseven.src
image8.src = afrieight.src

