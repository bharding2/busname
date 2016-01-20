'use strict'

var allProducts = [];
var totalClicks = 0;
//object constructor
function Products (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.numClicks = 0;
  this.numDisplays = 0;
  this.percentClicked = 0;
  //pushes instances into allProducts Array
  allProducts.push(this);
}

//new instances
var bag = new Products('bag', 'product/bag.jpg');
var banana = new Products('banana', 'product/banana.jpg');
var boots = new Products('boots', 'product/boots.jpg');
var chair = new Products('chair', 'product/chair.jpg');
var cthulu = new Products('cthulhu', 'product/cthulhu.jpg');
var dragon = new Products('dragon', 'product/dragon.jpg');
var pen = new Products('pen', 'product/pen.jpg');
var scissors = new Products('scissors', 'product/scissors.jpg');
var shark = new Products('shark', 'product/shark.jpg');
var sweep = new Products('sweep', 'product/sweep.png');
var unicorn = new Products('unicorn', 'product/unicorn.jpg');
var usb = new Products('usb', 'product/usb.gif');
var watercan = new Products('water can', 'product/water-can.jpg');
var wineglass = new Products('wine glass', 'product/wine-glass.jpg');

//declaring a function for random numbers(to represent products in Array)
function randomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

//the sequential arrangement of the products
var image1index = 0;
var image2index = 0;
var image3index = 0;


var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

//50: declaring a function to display 3 different random images
//51: image1index will equal product that is pulls from randomProduct function
//52. img1.src from HTML = allProducts[image1index] is already assigned an array number position and .filePath pulls the image from the directory
function displayThreeImages(){
  image1index = randomProduct();
  img1.src = allProducts[image1index].filePath;
  //numDisplay will keep track of numbers the image was displayed
  allProducts[image1index].numDisplays += 1;

  image2index = randomProduct();
  while (image2index === image1index) {
    image2index = randomProduct();
}
  img2.src = allProducts[image2index].filePath;
  allProducts[image2index].numDisplays += 1;

  image3index = randomProduct ();
  while (image3index === image1index || image3index === image2index) {
    image3index = randomProduct ();
}
  img3.src = allProducts[image3index].filePath;
  allProducts[image3index].numDisplays +=1;

  console.log(image1index);
  console.log(image2index);
  console.log(image3index);
}
//calling function to display 3 different random images
displayThreeImages();

//var to setup resultButton
var resultButton = document.getElementById('showResults');

//EventListeners: When item is clicked then do what's inside of each function
img1.addEventListener('click', handleImg1Click);
img2.addEventListener('click', handleImg2Click);
img3.addEventListener('click', handleImg3Click);

//Event Handlers: When specific array image is clicked numClicks+=1 counts as one click, totalClicks keeps track of all clicks. If statement totalClicks equals 15 then remove hidden attirbute so that result Button will appear.
function handleImg1Click() {
  allProducts[image1index].numClicks += 1;
  totalClicks += 1;
  if (totalClicks === 15) {
    resultButton.removeAttribute('hidden');
  }
  console.log(allProducts[image1index].productName + ' clicked ' + allProducts[image1index].numClicks + ' times');
//need to call displayThreeImages function inside event handler function to display 3 different images. Otherwise only image1 will display three times.
  displayThreeImages();
}

function handleImg2Click() {
  allProducts[image2index].numClicks += 1;
  totalClicks += 1;
  if (totalClicks === 15) {
    resultButton.removeAttribute('hidden');
  }
  console.log(allProducts[image2index].productName + ' clicked ' + allProducts[image2index].numClicks + ' times');

  displayThreeImages();
}
function handleImg3Click() {
  allProducts[image3index].numClicks += 1;
  totalClicks += 1;
  if (totalClicks === 15) {
    resultButton.removeAttribute('hidden');
  }
  console.log(allProducts[image3index].productName + ' clicked ' + allProducts[image3index].numClicks + ' times');

  displayThreeImages();
}
// var data = {
//     product: ['Luggage', 'Banana Slicer', 'Rain Boots', 'Chair', 'Cthulhu', 'Dragon Meat', 'Utensil Pens', 'Pizza Scissors', 'Shark Sleeping Bag', 'Baby Sweeper', 'Unicorn Meat', 'USB', 'Watering Can', 'Wine Glass'],
//     datasets: [
//         {
//             label: "Focus Group Results",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
