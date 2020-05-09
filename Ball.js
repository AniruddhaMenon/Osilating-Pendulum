class Ball {
    constructor(){

        
this.body = Bodies.circle(400,300,30);
World.add(world,this.body);

    }
    display(){
        push ();
        fill ("green");
        ellipseMode (CENTER);
        ellipse (this.body.position.x,this.body.position.y,50,50);
      // ellipse(200,300,50,50);
        pop ();
    }

}
