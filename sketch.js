const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,ball,line;



function preload() {
    
}

function setup(){
     createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    block1 = new Blocks(130,235,50,50);
    block2 = new Blocks(160,235,50,50);
    block3 = new Blocks(190,235,50,50);
    block4 = new Blocks(220,235,50,50);
    block5 = new Blocks(250,235,50,50);
    block6 = new Blocks(280,195,50,50);
    block7 = new Blocks(310,195,50,50);
    block8 = new Blocks(340,195,50,50);
    block9 = new Blocks(370,155,50,50);
    //block10 = new Blocks(400,700,50,50);
    //block11 = new Blocks(430,700,50,50);
    //block12 = new Blocks(460,700,50,50);
    //block13 = new Blocks(490,700,50,50);

    ball = new polygon(200,500,40)
    line = new slingshot(this.line,{x:200,y:500})
    



}

function draw(){
    background(0);
    Engine.update(engine);

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   //block10.display();
   //block11.display();
  // block12.display();
  // block13.display();

   ball.display();
   line.display();
    
     
}

function mouseDragged () {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased () {
    line.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        line.attach(ball.body);
    }
}

