class Soldier{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
          }
          this.body = Bodies.rectangle (x , y, width ,height, options);
          this.width = width;
          this.height = height;
          World.add(world , this.body);
          this.image = loadImage ("sprites/Soldier.png");
    }
    display() {
        var pos = this.body.position ;
        push ();
        translate (pos.x , pos.y);
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
      }
      moveRight(){
        if (this.body.isStatic === false) {
        var position = this.body.position;
        push();
        Matter.Body.translate(this.body,{x:+10,y:0});
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
        }
      }
      moveLeft(){
        if (this.body.isStatic === false) {
        var position1 = this.body.position;
        push();
        Matter.Body.translate(this.body,{x:-10,y:0});
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
      }
      }
}