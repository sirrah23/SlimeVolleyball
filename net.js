function Net(){
  this.width = 25;
  this.length = 75;
  this.x = width/2;
  this.y = height-this.length;

  this.show = function(){
    rect(this.x-this.width/2, this.y, this.width, this.length);
  }
}
