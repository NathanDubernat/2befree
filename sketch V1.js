var num = 10000;
var noiseScale=500, noiseStrength=100;
var particles = [num];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i=0; i<num; i++) {
    var loc = createVector(random(width*1.2), random(height), 2);
    var angle = 0;
    var dir = createVector(cos(angle), sin(angle));
    var speed = random(0.5,2);
    particles[i]= new Particle(loc, dir, speed);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  fill(0, 10);
  noStroke();
  circle(width/2, height/2, height);
  for (let i=0; i<particles.length; i++) {
    particles[i].run();
  }
}

class Particle{
  constructor(_loc,_dir,_speed){
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move(){
    let angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d =1;
    vel.mult(this.speed*d);
    this.loc.add(vel);
  }
  checkEdges(){
    let distance = dist(width/2, height/2, this.loc.x, this.loc.y);
    if (distance>width/2) {
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
    }
  }
  update(){
    fill(255);
    ellipse(this.loc.x, this.loc.y, this.loc.z);
  }
}