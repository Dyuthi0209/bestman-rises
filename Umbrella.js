class Umbrella {
    constructor(x,y,r){
        var options = {
          isStatic: true,
          restitution: 0.1,
          friction: 0.5
        }
      
      this.x = x;
      this.y = y;
      this.r = r;
  
      this.image = loadImage("Walking Frame/walking_1.png");
      this.image2 = loadImage("bat/Bestman-01.png");
      
  
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);
  
      }
  
      display(){
          var pos = this.body.position;
       push();
       
       translate(pos.x,pos.y+63);
       rectMode(CENTER);
       strokeWeight(2);
       fill("silver");
       imageMode(CENTER);
  
      if(frameCount>=100){
       image(this.image2,0,0,200,350);
         }
         else {
       image(this.image,0,0,420,420);
      }
       pop();
      }
  }