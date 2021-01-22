let img;

function setup() {
  createCanvas(800, 800);
  img = loadImage('');
}

function draw() {
  background(200);
  image(img, 0, 0);
}
