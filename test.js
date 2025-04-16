let message = 'Week 4';
let font, bounds;
let fontsize = 60;
let x, y;

function preload() {
  font = loadFont('fonts/Ballet.ttf');
}

function setup() {
  createCanvas(710, 400);
  textFont(font);
  textSize(fontsize);
  textAlign(LEFT, TOP);

  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(240);

  // Draw the text
  fill(0); // blue link-style color
  text(message, x, y);

  // Update bounds in case the position changes
  bounds = font.textBounds(message, x, y, fontsize);

  // Hover effect: jitter if inside bounds
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-2, 2);
    y += random(-2, 2);
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  // Click redirection if mouse is inside bounds
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    window.location.href = "week-4.html"; // <-- change to your target page
  }
}
