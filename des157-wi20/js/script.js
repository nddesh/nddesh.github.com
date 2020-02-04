//Deshmukh, Neha
//11-04-19
//Overlapping Circles

color a = color(random(0, 255), random(0, 255), random(0, 255));
color b = color(random(0, 255), random(0, 255), random(0, 255));

function setup() {
  var myCanvas = createCanvas(800, 250);
  background(0);
  myCanvas.parent(mySketch);
}

function draw() {
  for(var y = 100; y < height+100; y += 200) {  //first set
    for(var x = 100; x < width+100; x += 200) {  //duplicate for multiple columns
      drawCirc(x, y, a);
    }
  }

  for(var y = 0; y < height+100; y += 200) {  //second overlapping set
    for(var x = 0; x < width+100; x += 200) {  //duplicate for multiple columns
      drawCirc(x, y, b);
    }
  }
}

function drawCirc(var x, var y, color c) {
    noFill();
    stroke(c);
    ellipse(x, y, 200, 200);
}


//change color when enter is pressed
function mouseIsPressed() {
    background(0);
    a = color(random(0, 255), random(0, 255), random(0, 255));
    b = color(random(0, 255), random(0, 255), random(0, 255));
  }
}
