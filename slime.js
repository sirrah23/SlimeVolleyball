function Slime(x, y, color, side, net){
  this.x = x;
  this.y = y;
  this.color = color;
  this.side = side; // Side of the net the slime is on
  this.net = net;   // The in-game net object
  this.xspeed = 0;
  this.yspeed = 0;
  this.diameter = 100;
  this.jumping = false;

  this.show = function(){
    push();
    fill(this.color.x, this.color.y, this.color.z);
    arc(this.x, this.y, this.diameter, this.diameter, PI, -PI, CHORD);
    pop();
  }

  // Check left side of slime for collisions
  this.checkLeft = function(){
    if (this.side == "LEFT"){
      if (this.x - this.diameter/2 < 0){
        this.x = this.diameter/2;
      }
    } else {
      if ((this.x - (this.diameter/2)) < (this.net.x)){
        this.x = this.net.x + this.diameter/2;
      }
    }
  }

  // Check right side of slime for collisions
  this.checkRight = function(){
    if (this.side == "LEFT"){
      if ((this.x + this.diameter/2) > (this.net.x)){
        this.x = this.net.x - this.diameter/2;
      }
    } else{
      if (this.x + this.diameter/2 > width){
        this.x = width-this.diameter/2;
      }
    }
  }

  this.checkBoundary = function(){
    this.checkLeft();
    this.checkRight();
  }

  this.stopRun = function(){
    this.xspeed = 0;
  }

  this.run = function(speed){
    this.xspeed = speed;
  }

  this.jump = function(){
    if (!this.jumping){
      this.jumping = true;
      this.yspeed = 20;
    }
  }

  this.applyGravity = function(){
    if (this.y < height)
      this.yspeed -=1;
    else{
      // TODO: Move to check boundary?
      this.y = height;
      this.jumping = false; // reached the ground!!!
    }
  }

  this.move = function(){
    this.x += this.xspeed;
    this.y -= this.yspeed;
    this.applyGravity();
    this.checkBoundary();
  }
}
