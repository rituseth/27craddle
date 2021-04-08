 class Bob {
        constructor(x,y,r){
            var options = {
                isStatic :false,
                restitution :1,
                density:7.8,
                friction:0
                
            }
           
             this.x=x;
             this.y=y;
            this.r=r;
            this.body=Bodies.circle(x,y, 25/2, options) 
            World.add(world,this.body);


            console.log(this.body)
        }
        display(){
            var pos = this.body.position 
           push ()
           translate (pos.x,pos.y)
           ellipseMode(RADIUS)
           fill ("brown")
            ellipse(0,0, 25)
            
    pop ()
        }
    }