function setup() {
createCanvas(400, 400);
}

function draw() {
background(220);
drawCustomSpongeShape(10, 0);
}

function drawCustomSpongeShape(colorKnob) {
if (mouseIsPressed) {
fill(colorKnob); //change custtom shape color to blue when user clicks and holds
} else {
fill(colorKnob);
}

// draw custom shape
scale(.4);
noStroke();
rect(100, 100, 200);
scale(.7);

ellipse(285, 100, 150);
ellipse(200, 150, 150);
ellipse(375, 150, 150);
ellipse(150, 275, 150);
ellipse(425, 275, 150);
ellipse(200, 400, 150);
ellipse(375, 400, 150);
ellipse(285, 475, 150);
}



