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
  }

}
