color penColor = color(255, 255, 255);
color a = color(255, 255, 255); //white
color b = color(255, 0, 0); //red
color c = color(0, 255, 0); //green
color d = color(0, 0, 255); //blue
color e = color(250, 250, 0); //yellow

function setup() {
  var myCanvas = createCanvas(800, 250);
  background(0);
}

function draw() {
  //white button
  noStroke();
  fill(a);
  rect(680, 50, 50, 40);

  //red button
  noStroke();
  fill(b);
  rect(680, 90, 50, 40);

  //green button
  noStroke();
  fill(c);
  rect(680, 130, 50, 40);

  //blue button
  noStroke();
  fill(d);
  rect(740, 50, 50, 40);

  //yellow button
  noStroke();
  fill(e);
  rect(740, 90, 50, 40);

  //clear board when key pressed
  stroke(255);
  strokeWeight(1);
  fill(0);
  rect(740, 130, 50, 40);
  fill(255);
  textSize(15);
  text("CLEAR", 742, 130);

  //mouse movement
  if (mouseIsPressed) {
    if (mouseX > 680 && mouseX < 720) {
      //white button
      if (mouseY > 50 && mouseY < 90) {
        penColor = a;
      }

      //red button
      else if (mouseY > 90 && mouseY < 130) {
        penColor = b;
      }

      //green button
      else if (mouseY > 130 && mouseY < 170) {
        penColor = c;
      }
    }


    if (mouseX > 740 && mouseX < 790) {
      //color buttons

      //blue button
      else if (mouseY > 210 && mouseY < 250) {
        penColor = d;
      }

      //yellow button
      else if (mouseY > 250 && mouseY < 290) {
        penColor = e;
      }

      else if (mouseY > 300 && mouseY < 340) {
        background(0);
      }
    }
  }

  //draw only when mouse is pressed
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < 500) {
      if (mouseY > 0 && mouseY < 500) {
          stroke(penColor);
          strokeWeight(2);
          line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }
  }
}
