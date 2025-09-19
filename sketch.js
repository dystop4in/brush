let brushSize = 30;

function setup() {
  createCanvas(800, 500);
  background(240);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    // distance between old mouse and new mouse
    let d = dist(mouseX, mouseY, pmouseX, pmouseY);
    let steps = int(d); // more steps = smoother line

    // go through each step
    for (let s = 0; s < steps; s++) {
      let x = pmouseX + (mouseX - pmouseX) * (s / steps);
      let y = pmouseY + (mouseY - pmouseY) * (s / steps);

      // draw the brush here
      for (let i = -brushSize/2; i < brushSize/2; i++) {
        let t = (i + brushSize/2) / brushSize; // 0 → 1 across the width

        // simple shading from light to dark
        let shade = 230 - t * 200;

        fill(shade, 180);
        ellipse(x + i, y, 3, 3);
      }
    }
  }
}
