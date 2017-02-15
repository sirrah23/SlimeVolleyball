function Slime(x, y, color, side){
  this.x = x;
  this.y = y;
  this.side = side;
  this.speed = 8;
  this.diameter = 100;
  this.color = color;

  this.show = function(){
    push();
    fill(this.color.x, this.color.y, this.color.z);
    arc(this.x, this.y, this.diameter, this.diameter, PI, -PI, CHORD);
    pop();
  }

  this.moveLeft = function(net){
    this.x -= this.speed;
    if (this.side == "LEFT"){
      if (this.x - this.diameter/2 < 0){
        this.x = this.diameter/2;
      }
    } else {
      if ((this.x - this.diameter/2) < (net.x + net.width)){
        this.x = net.x + this.diameter/2;
      }
    }
  }

  this.moveRight = function(net){
    this.x += this.speed;
    if (this.side == "LEFT"){
      if ((this.x + this.diameter/2) > (net.x)){
        this.x = net.x - this.diameter/2;
      }
    } else{
      if (this.x + this.diameter/2 > width){
        this.x = width-this.diameter/2;
      }
    }
  }
}
