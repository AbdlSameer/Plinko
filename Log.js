class Log {
  constructor(x,y,height,angle){
   
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}