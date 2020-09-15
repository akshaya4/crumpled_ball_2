var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;	
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

        rectMode(CENTER);
	
	 
	//paper=createSprite(50,650);
    

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paperObject=new Paper(200,450,70);
	 groundObject=new Ground(400,670,800,10);
	 dustbinObj=new dustbin(600,650,100,20);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();
 paperObject.display();
 groundObject.display();
 dustbinObj.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-11})
	}
}

