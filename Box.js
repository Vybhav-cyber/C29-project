class Box{
  constructor(x, y, width, height) {
      var options = {
          density : 0.5,
          restitution :0.4,
          friction :0.3
          //isStatic:true

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("Images/pyramid.gif");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      pop();
    }
} 


