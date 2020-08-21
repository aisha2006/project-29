
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var pentagon, pentagonImg;


function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
 
  stand= new Ground(500,795,1000,5); 

  block1 = new Box(300,765,50,50);
  block2 = new Box(350,765,50,50);
  block3 = new Box(400,765,50,50);
  block4 = new Box(450,765,50,50);
  block5 = new Box(500,765,50,50);
  block6 = new Box(550,765,50,50);
  block7 = new Box(600,765,50,50);
  
  
 
  
  block8 = new Box(350,715,50,50);
  block9 = new Box(400,715,50,50);
  block10 = new Box(450,715,50,50);
  block11 = new Box(500,715,50,50);
  block12 = new Box(550,715,50,50);

  

  block13 = new Box(400,665,50,50);
  block14 = new Box(450,665,50,50);
  block15 = new Box(500,665,50,50);

  block16 = new Box(450,615,50,50);

  pentagon = new Pentagon(50,600,100,100);

  slingshot = new SlingShot(pentagon.body,{x:80,y:600});

  console.log(block1.body);

}

function draw() {
  Engine.update(engine);
  background("pink");  

  

  stand.display();
  block1.display1();
  block2.display1();
  block3.display1();
  block4.display1();
  block5.display1();
  block6.display1();
  block7.display1();
  block8.display2();
  block9.display2();
  block10.display2();
  block11.display2();
  block12.display2();
  block13.display3();
  block14.display3();
  block15.display3();
  block16.display4();
  pentagon.display();
  slingshot.display();
  
}


function mouseDragged(){
  Matter.Body.setPosition(pentagon.body, {x : mouseX , y : mouseY});
}

function mouseReleased(){
 slingshot.fly();
}
