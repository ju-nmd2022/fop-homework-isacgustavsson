/* 

This is my pixelart emoji that i made by drawing squares
and using different fillcolors. 

*/

let canvasPositionX = 300;
let canvasPositionY = 300;
let s = 0.8;
let alienMessage = "clickety clack!";

// Background color

background("#5d13e7");

//Emoji Outline Below

function drawEmoji(canvasPositionX, canvasPositionY, s) {
  fill("black");
  noStroke();
  scale(s);
  translate(canvasPositionX, canvasPositionY);
  rect(-150, -200, 20, 20);
  rect(-130, -200, 20, 20);
  rect(-110, -220, 20, 20);
  rect(-90, -220, 20, 20);
  rect(-70, -220, 20, 20);
  rect(-50, -220, 20, 20);
  rect(-30, -220, 20, 20);
  rect(-10, -200, 20, 20);
  rect(10, -200, 20, 20);
  rect(30, -180, 20, 20);
  rect(50, -160, 20, 20);
  rect(70, -140, 20, 20);
  rect(70, -120, 20, 20);
  rect(70, -100, 20, 20);
  rect(70, -80, 20, 20);
  rect(70, -60, 20, 20);
  rect(50, -40, 20, 20);
  rect(30, -20, 20, 20);
  rect(10, 0, 20, 20);
  rect(-10, 20, 20, 20);
  rect(-30, 40, 20, 20);
  rect(-50, 60, 20, 20);
  rect(-70, 60, 20, 20);
  rect(-90, 60, 20, 20);
  rect(-110, 40, 20, 20);
  rect(-130, 20, 20, 20);
  rect(-150, 0, 20, 20);
  rect(-170, -20, 20, 20);
  rect(-190, -40, 20, 20);
  rect(-210, -60, 20, 20);
  rect(-210, -80, 20, 20);
  rect(-210, -100, 20, 20);
  rect(-210, -120, 20, 20);
  rect(-210, -140, 20, 20);
  rect(-190, -160, 20, 20);
  rect(-170, -180, 20, 20);

  // Left Eye

  fill("black");
  rect(-150, -140, 20, 20);
  rect(-130, -140, 20, 20);
  rect(-110, -120, 20, 20);
  rect(-90, -100, 20, 20);
  rect(-90, -80, 20, 20);
  rect(-90, -60, 20, 20);
  rect(-110, -40, 20, 20);
  rect(-130, -40, 20, 20);
  rect(-150, -60, 20, 20);
  rect(-170, -80, 20, 20);
  rect(-170, -100, 20, 20);
  rect(-170, -120, 20, 20);
  rect(-150, -120, 20, 20);

  push();
  fill("white");
  rect(-130, -120, 20, 20);
  rect(-150, -100, 20, 20);
  pop();

  rect(-130, -100, 20, 20);
  rect(-110, -100, 20, 20);
  rect(-150, -80, 20, 20);
  rect(-130, -80, 20, 20);
  rect(-110, -80, 20, 20);
  rect(-130, -60, 20, 20);
  rect(-110, -60, 20, 20);

  // Right Eye

  fill("black");
  rect(10, -140, 20, 20);
  rect(30, -120, 20, 20);
  rect(30, -100, 20, 20);
  rect(30, -80, 20, 20);
  rect(10, -60, 20, 20);
  rect(-10, -40, 20, 20);
  rect(-30, -40, 20, 20);
  rect(-50, -60, 20, 20);
  rect(-50, -80, 20, 20);
  rect(-50, -100, 20, 20);
  rect(-30, -120, 20, 20);
  rect(-10, -140, 20, 20);
  rect(10, -120, 20, 20);

  push();
  fill("white");
  rect(-10, -120, 20, 20);
  rect(10, -100, 20, 20);
  pop();

  rect(-30, -100, 20, 20);
  rect(-10, -100, 20, 20);
  rect(-30, -80, 20, 20);
  rect(-10, -80, 20, 20);
  rect(10, -80, 20, 20);
  rect(-30, -60, 20, 20);
  rect(-10, -60, 20, 20);

  // Dark skin color

  fill("#138808");
  rect(-110, -200, 20, 20);
  rect(-90, -200, 20, 20);
  rect(-70, -200, 20, 20);
  rect(-50, -200, 20, 20);
  rect(-30, -200, 20, 20);
  rect(-150, -180, 20, 20);
  rect(-130, -180, 20, 20);
  rect(-170, -160, 20, 20);
  rect(-150, -160, 20, 20);
  rect(-170, -140, 20, 20);
  rect(-190, -140, 20, 20);
  rect(-190, -120, 20, 20);
  rect(-190, -100, 20, 20);
  rect(-190, -80, 20, 20);
  rect(-190, -60, 20, 20);
  rect(-170, -60, 20, 20);
  rect(-170, -40, 20, 20);
  rect(-150, -40, 20, 20);
  rect(-150, -20, 20, 20);
  rect(-130, -20, 20, 20);
  rect(-110, -20, 20, 20);
  rect(-90, -40, 20, 20);
  rect(-70, -60, 20, 20);
  rect(-70, -80, 20, 20);
  rect(-70, -100, 20, 20);
  rect(-90, -120, 20, 20);
  rect(-110, -140, 20, 20);
  rect(-50, -120, 20, 20);
  rect(-30, -140, 20, 20);
  rect(10, -160, 20, 20);
  rect(-10, -180, 20, 20);
  rect(10, -180, 20, 20);
  rect(30, -160, 20, 20);
  rect(30, -140, 20, 20);
  rect(50, -140, 20, 20);
  rect(50, -120, 20, 20);
  rect(50, -100, 20, 20);
  rect(50, -80, 20, 20);
  rect(50, -60, 20, 20);
  rect(30, -60, 20, 20);
  rect(30, -40, 20, 20);
  rect(10, -40, 20, 20);
  rect(10, -20, 20, 20);
  rect(-10, -20, 20, 20);
  rect(-30, -20, 20, 20);
  rect(-50, -40, 20, 20);
  rect(-10, 0, 20, 20);
  rect(-30, 20, 20, 20);
  rect(-50, 40, 20, 20);
  rect(-70, 40, 20, 20);
  rect(-90, 40, 20, 20);
  rect(-110, 20, 20, 20);
  rect(-130, 0, 20, 20);

  // Light skin color

  fill("#299617");

  //forehead

  rect(-110, -180, 20, 20);
  rect(-90, -180, 20, 20);
  rect(-70, -180, 20, 20);
  rect(-50, -180, 20, 20);
  rect(-30, -180, 20, 20);
  rect(-130, -160, 20, 20);
  rect(-110, -160, 20, 20);
  rect(-90, -160, 20, 20);
  rect(-70, -160, 20, 20);
  rect(-50, -160, 20, 20);
  rect(-30, -160, 20, 20);
  rect(-10, -160, 20, 20);
  rect(-90, -140, 20, 20);
  rect(-70, -140, 20, 20);
  rect(-50, -140, 20, 20);
  rect(-70, -120, 20, 20);

  // Mouth

  rect(-70, -40, 20, 20);
  rect(-90, -20, 20, 20);
  rect(-70, -20, 20, 20);
  rect(-50, -20, 20, 20);
  rect(-110, 0, 20, 20);
  rect(-30, 0, 20, 20);
  rect(-90, 20, 20, 20);
  rect(-70, 20, 20, 20);
  rect(-50, 20, 20, 20);
  rect(-50, 0, 20, 20);
  rect(-70, 0, 20, 20);
  rect(-90, 0, 20, 20);

  push();
  fill("black");
  scale(0.6);
  rect(-125, 0, 20, 20);
  rect(-105, 0, 20, 20);
  rect(-95, 0, 20, 20);
  pop();

  // Speechbubble

  /* 

  push();
  beginShape();
  stroke(0, 0, 0);
  strokeWeight(8);
  fill("black");
  vertex(canvasPositionX + 220, -240);
  vertex(canvasPositionX - 50, -240);
  bezierVertex(
    canvasPositionX - 200,
    -240,
    canvasPositionX - 200,
    -40,
    canvasPositionX - 25,
    -50
  );
  vertex(canvasPositionX + 220, -50);
  bezierVertex(
    canvasPositionX + 350,
    -60,
    canvasPositionX + 350,
    -240,
    canvasPositionX + 222,
    -240
  );
  endShape();
  beginShape();
  stroke(0, 0, 0);
  noStroke();
  vertex(canvasPositionX - 80, 0);
  vertex(canvasPositionX, -50);
  vertex(canvasPositionX - 80, -80);
  endShape();
  pop();

  // message inside bubble

  fill(100, 250, 120);
  textSize(40);
  textFont("Trebuchet MS");
  textStyle(BOLD);
  text(alienMessage, 250, -140);

  */
}
push();
drawEmoji(canvasPositionX, canvasPositionY, s * 0.6);
pop();
push();
drawEmoji(canvasPositionX + 150, canvasPositionY + 100, s * 0.9);
pop();
push();
drawEmoji(canvasPositionX + 300, canvasPositionY + 200, s * 1.2);
pop();
