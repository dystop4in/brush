let r = 20;
let grow = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  fill("#3A86FF");
  noStroke();
  ellipse(width/2, height/2, r);

  if (grow) {
    r += 2;
    if (r > 200) grow = false;
  } else {
    r -= 2;
    if (r < 20) grow = true;
  }
}
