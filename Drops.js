class Drops {
    constructor(x,y){
        var options ={
        friction : 0.1
        }

        this.body = Bodies.circle (x,y,10,options)
        World.add(world, this.body)

    }
    display(){
        ellipseMode (RADIUS);
        fill("blue")
    }
        
        update(){
            if(this.rain.position.y > height){
                Matter.Body.setPosition(this.rain, {x: random (0,400) , y : random (0,400)})
                }
            
            ellipse (this.body.position.x , this.body.position.y, 10 ,10 )
         
            
            
            
    }
}