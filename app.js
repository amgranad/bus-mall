var clicks = 0;
var image1El = document.getElementById('image1');
var image2El = document.getElementById('image2');
var image3El = document.getElementById('image3');

var allImages = [];

function Image(name, source){
  this.name = name;
  this.source = source;
  this.views = 0;
  this.clicks = 0;
  this.clicksPerView = this.clicks / this.views;
  this.clicksPerOverall = this.clicks / 25;
  this.canBeShown = 3;
  allImages.push(this);
}

new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulhu', 'img/cthulhu.jpg');
new Image('dog duck', 'img/dog-duck.jpg');
new Image('dragon', 'img/dragon.jpg');
new Image('pen', 'img/pen.jpg');
new Image('pet sweep', 'img/pet-sweep.jpg');
new Image('scissors', 'img/scissors.jpg');
new Image('shark', 'img/shark.jpg');
new Image('sweep', 'img/sweep.png');
new Image('tauntaun', 'img/tauntaun.jpg');
new Image('unicorn', 'img/unicorn.jpg');
new Image('usb', 'img/usb.gif');
new Image('water can', 'img/water-can.jpg');
new Image('wine glass', 'img/wine-glass.jpg');

function generateRandomNumber(){
  return Math.floor(Math.random() * allImages.length);
}

var queue = [];
for (var i = 0; i < 6; i++) {//populate queue with six numbers as placeholders
  queue.push(generateRandomNumber());
}

function findAMatch(number) {
  return queue.indexOf(number);
}

function showNewImages() {
  var random1 = generateRandomNumber();
  var random2 = generateRandomNumber();
  var random3 = generateRandomNumber();
  var is1Matching = findAMatch(random1);
  while (findAMatch(random1) >= 0) {
    random1 = generateRandomNumber();
  };
  queue.push(random1);
  queue.shift();
  while (findAMatch(random2) >= 0) {
    random2 = generateRandomNumber();
  };
  queue.push(random2);
  queue.shift();
  while (findAMatch(random3) >= 0) {
    random3 = generateRandomNumber();
  };
  queue.push(random3);
  queue.shift();
  var image1Source = allImages[queue[3]].source;
  var image2Source = allImages[queue[4]].source;
  var image3Source = allImages[queue[5]].source;
  var image1Tag = document.createElement('img');
  var image2Tag = document.createElement('img');
  var image3Tag = document.createElement('img');
  image1Tag.setAttribute('src', image1Source);
  image2Tag.setAttribute('src', image2Source);
  image3Tag.setAttribute('src', image3Source);
  image1Tag.setAttribute('width', '100px');
  image2Tag.setAttribute('width', '100px');
  image3Tag.setAttribute('width', '100px');
  image1Tag.setAttribute('height', '100px');
  image2Tag.setAttribute('height', '100px');
  image3Tag.setAttribute('height', '100px');
  image1El.appendChild(image1Tag);
  image2El.appendChild(image2Tag);
  image3El.appendChild(image3Tag);
  console.log('image 1 ' + image1Source);
  console.log('image 2 ' + image2Source);
  console.log('image 3 ' + image3Source);
  console.log('***');
}

showNewImages();
