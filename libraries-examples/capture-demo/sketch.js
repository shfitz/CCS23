let nxSeed = 0.0; // seed for noise()
let nySeed = 0.0; // seed for noise()

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  // draw a background with some translucency
  fill(240, 180, 0, 100);
  rect(0, 0, width, height);
  // draw a circle
  stroke(160, 10, 220);
  strokeWeight(5);
  noFill();
  ellipse(noise(nxSeed) * width, noise(nySeed) * height, 30); // draw the ellipse at a locatio generated by the noise function

  nxSeed += .01; // increment value for x
  nySeed += .005;  // increment value for y

}