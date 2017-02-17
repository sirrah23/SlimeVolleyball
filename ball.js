function Ball(){
  this.x = width/2;
  this.y = height/2;
  this.yspeed = 0;
  this.xspeed = 0;
  this.width = 35;

  this.show = function(){
      ellipse(this.x, this.y, this.width);
  }

  this.toss = function(){
    this.yspeed = -15;
    // Randomly toss ball left or right at start!
    if(random() < 0.5){
      this.xspeed = 5;
    } else {
      this.xspeed = -5;
    }
  }

  this.move = function(){
    if(this.xspeed == 0 && this.yspeed == 0){
      this.toss();
    }
    this.yspeed +=0.5;
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.wallCheck();
  }

  this.wallCheck = function(){
    if (this.x < 0 || this.x > width){
      this.xspeed *= -1;
      // this.yspeed = -15;
    }
  }

  this.collision = function(other){
    var distance = dist(this.x, this.y, other.x, other.y);
    var sum_radii = this.width/2 + other.width/2;
    return distance < sum_radii;
  }

  this.hitChange = function(other){
    this.yspeed = -15;
    if (this.x < other.x) { //hit left side of object, go left
      this.xspeed = -5;
    }
    else if (this.x > other.x) { //hit right side of object, go right
      this.xspeed = 5;
    }
    else{ // hit center, go up
      this.xspeed = 0;
    }
  }
}
