
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob
var bo1, bo2, bo3, bo4,roof,rf
function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = Bodies.rectangle(200, 140, 250, 10 , {isStatic:true} );
	World.add(world, roof);
	bob = Bodies.circle(100, 340 , 5 );
	World.add(world, bob);
	bo1 = Bodies.circle(150, 340 , 5);
	World.add(world, bo1);
	bo2 = Bodies.circle(200, 340 , 5 );
	World.add(world, bo2);
	bo3 = Bodies.circle(250, 340 , 5 );
	World.add(world, bo3);
	bo4 = Bodies.circle(300, 340 , 5);
	World.add(world, bo4);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rf = createSprite(roof.position.x,roof.position.y,250,10)
  bob = createSprite(bob.position.x,bob.position.y,30,30)
  bo1 = createSprite(bo1.position.x,bo1.position.y,30,30)
  bo2 = createSprite(bo2.position.x,bo2.position.y,30,30)
  bo3 = createSprite(bo3.position.x,bo3.position.y,30,30)
  bo4 = createSprite(bo4.position.x,bo4.position.y,30,30)
  
  drawSprites();
 
}



