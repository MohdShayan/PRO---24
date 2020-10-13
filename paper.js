class Paper {
    constructor(x, y) {
      var ball_options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
      }
      this.body = Bodies.circle(x, y,20, ball_options);
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
 
      push();
     
      translate(pos.x, pos.y);
     
      strokeWeight(10);
       stroke("orange")
    
      fill(255);
      circle(0, 0,40);
      pop();
    }
  }
  