var slingshot,box,box1,box2,box3,box4,box5,box6;
const engine=Matter.engine;
const world = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
function preload(){
  backgroundImage=loadImage("bg.png");
}

function setup() {
  createCanvas(800,400);
  slingshot = new SlingShot(250, 300, 50, 50);
       box  = new Box (600, 250, 100, 50);
       box1 = new Box2(600, 200, 100, 50);
       box2 = new Box (600, 150, 100, 50);
       box3 = new Box (60, 100, 100, 50);
       box4 = new Box2 (600, 50, 100, 50);
       box5 = new Box2(600, 25, 100, 50);
       box6 = new Box (600, 475, 100, 50);
     ground = new Ground(0,390,800,20);
  }

function draw() {
  background(backgroundImage);
  engine.update(engine);
  box.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ground.display();


  drawSprites();
}