var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody , helicopterBody ,ground ;
var part1 , part2 , part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 35 , {isStatic:true,friction:2});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 part1 = new Zone(width/2,645,200,20);
	 part2 = new Zone(width/2-100,625,20,100);
	 part3 = new Zone(width/2+100,625,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  part1.display();
  part2.display();
  part3.display();


  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
 Matter.Body.setStatic(packageBody,false);
	
  }
}



