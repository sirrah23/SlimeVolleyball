var p1;
var p2;
var net;

function setup(){
  createCanvas(1200, 500);
  p1 = new Slime(200, height, createVector(255, 0, 0), "LEFT");
  p2 = new Slime(width-200, height, createVector(0, 255, 0), "RIGHT");
  net = new Net();
}

function draw(){
  background(59, 119, 214);
  if (keyIsDown(65)){
    p1.moveLeft(net);
  }
  if (keyIsDown(68)){
    p1.moveRight(net);
  }
  if (keyIsDown(LEFT_ARROW)){
    p2.moveLeft(net);
  }
  if (keyIsDown(RIGHT_ARROW)){
    p2.moveRight(net);
  }
  p1.show();
  p2.show();
  net.show();
}
