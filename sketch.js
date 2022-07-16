var base = [
  "Callad",
  "Pintad",
  "Sarall",
  "Chemill",
  "Jurain",
  "Sentain",
  "Bimerid",
  "Polem",
  "Ontamain",
  "Hundan",
  "Faram",
  "Secol",
  "Riano",
  "Kein",
  "Fumal",
  "Paran",
  "Gelat",
  "Random",
  "Silic",
  "Qwert",
  "Dontan",
  "Eiyad",
  "Or",
  "Blor",
  "Scam",
  "Tubin",
  "Quot",
  "Scaven",
  "Col",
  "Chas",
  "Jean",
  "Romol",
  "Tenan",
  "Intel",
];

var fix = ["ite", "ium", "us", "ide", "elite", "ainium", "stone", "onium"];
var rand = 0;
var rand2 = 0;
var x;

var click;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  soundFormats("wav");
  click = loadSound("mouse click");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rand = round(random(33));
  rand2 = round(random(7));
  textStyle(ITALIC);
  x = random(-50, width);
}

function draw() {
  background(random(0, 5));
  x = random(width);
  stroke(random(0, 100));
  strokeWeight(0.1);
  line(x, 0, x, windowHeight);
  //----------------------------------
  strokeWeight(0.5);
  stroke(random(50), random(50), random(50));
  line(x + 50, 0, x + 50, windowHeight);
  //----------------------------------
  strokeWeight(0.5);
  stroke(random(50));
  line(windowWidth, x - 300, 0, x - 300);
  strokeWeight(0.5);
  stroke(random(50));
  line(windowWidth, x + 200, 0, x + 200);
  //----------------------------------

  noStroke();
  textAlign(CENTER);
  textSize(random(45, 47));
  fill(random(200, 255));
  textFont("Georgia");
  text(base[rand] + fix[rand2], width / 2, height / 2);
}

function mouseClicked() {
  click.play();
  rand = round(random(33));
  rand2 = round(random(7));
}
