var penColor = `#ffffff`;
var a = `#ffffff`; //white
var b = `#ff0000`; //red
var c = `#00ff00`; //green
var d = `#0000ff`; //blue
var e = `#fafa00`; //yellow

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent(mySketch);
  background(`#000000`);
}

function draw() {
  textSize(18);
  noStroke();
  text("LET'S DRAW!", 680, 50)

  //white button
  noStroke();
  fill(a);
  rect(680, 70, 50, 40);

  //red button
  noStroke();
  fill(b);
  rect(680, 120, 50, 40);

  //green button
  noStroke();
  fill(c);
  rect(680, 170, 50, 40);

  //blue button
  noStroke();
  fill(d);
  rect(740, 70, 50, 40);

  //yellow button
  noStroke();
  fill(e);
  rect(740, 120, 50, 40);

  //clear board when key pressed
  stroke(255);
  strokeWeight(1);
  fill(`#000000`);
  rect(740, 170, 50, 40);
  fill(`#ffffff`);
  textSize(14);
  text("CLEAR", 742, 195);

  //mouse movement
  if (mouseIsPressed) {
    if (mouseX > 680 && mouseX < 730) {
      //white button
      if (mouseY > 70 && mouseY < 110) {
        penColor = a;
      }

      //red button
      else if (mouseY > 120 && mouseY < 160) {
        penColor = b;
      }

      //green button
      else if (mouseY > 170 && mouseY < 210) {
        penColor = c;
      }
    }


    if (mouseX > 740 && mouseX < 790) {
      //color buttons

      //blue button
      if (mouseY > 70 && mouseY < 110) {
        penColor = d;
      }

      //yellow button
      else if (mouseY > 120 && mouseY < 160) {
        penColor = e;
      }

      else if (mouseY > 170 && mouseY < 210) {
        background(`#000000`);
      }
    }
  }

  //draw only when mouse is pressed
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < 670) {
      if (mouseY > 0 && mouseY < 670) {
          stroke(penColor);
          strokeWeight(2);
          line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }
  }
}
