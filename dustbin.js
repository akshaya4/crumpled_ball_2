class dustbin{
    constructor(x,y,width,height){
      var options={
        isStatic:true
    }
    this.image=loadImage("dustbingreen - Copy.png")
    this.angle=0;
    this.width=width;
    this.height=height;
    this.bodyBottom=Bodies.rectangle(x,y,width,height,options);
    this.bodyLeft=Bodies.rectangle(x-50,y-50,20,81,options);
    this.bodyRight=Bodies.rectangle(x+50,y-50,20,81,options);
    Matter.Body.setAngle(this.bodyLeft,this.angle);
    Matter.Body.setAngle(this.bodyRight,this.angle);
    World.add(world, this.bodyBottom)
    World.add(world, this.bodyLeft)
    World.add(world, this.bodyRight)
    }
    
    display(){
        var posBottom=this.bodyBottom.position;
        var posLeft=this.bodyLeft.position;
        var posRight=this.bodyRight.position;
        push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,20,81);
            pop()
            
            push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,20,81);
            pop()
            
            push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rect(0,0,this.width,this.height);
			pop()
    }
}