var p1;
var p2;
var ball;
var net;

function setup(){
  createCanvas(1200, 500);
  net = new Net();
  p1 = new Slime(200, height, createVector(255, 0, 0), "LEFT", net);
  p2 = new Slime(width-200, height, createVector(0, 255, 0), "RIGHT", net);
  ball = new Ball();
}

function draw(){
  background(59, 119, 214);
  if (keyIsDown(65)){
    p1.run(-8);
  }
  if (keyIsDown(68)){
    p1.run(8);
  }
  if (keyIsDown(87)){
    p1.jump();
  }
  if (keyIsDown(LEFT_ARROW)){
    p2.run(-8);
  }
  if (keyIsDown(RIGHT_ARROW)){
    p2.run(8);
  }
  if (keyIsDown(UP_ARROW)){
    p2.jump();
  }
  p1.move();
  p2.move();
  ball.move();
  ball.show()
  p1.show();
  p2.show();
  net.show();
  if (ball.collision(p1)){
    ball.hitChange(p1);
  }
  if (ball.collision(p2)){
    ball.hitChange(p2);
  }
}

function keyReleased(){
  if(keyCode == 65 || keyCode == 68){
    p1.stopRun()
  }
  if(keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW){
    p2.stopRun()
  }
}
