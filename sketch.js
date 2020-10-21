const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  heli,soldier,soldier1,soldImg;
var  rope,ground;
var pos;
var ground1;
var tank,tank1,tankImg;
var grenade;

function preload(){
soldImg = loadImage("sprites/Soldier.png");
tankImg = loadImage("sprites/Tank.png");
}

function setup() {
	createCanvas(1500, 800);
	engine = Engine.create();
  world = engine.world;
  heli = new Helicopter(250,100, 300,140);
  soldier = new Soldier(270,90,110,110);
  soldier1 = createSprite(270,90,110,110);
  soldier1.addImage(soldImg);
  ground = createSprite(750,700,1800,10);
  ground.velocityX = -2;
  ground.shapeColor = "brown"
  ground1 = new Ground(750,700,1800,10);
  pos = heli.body.position;
  tank = new Tank(900,655,190,95);
  //tank1 = createSprite(900,655,190,95);
  //tank1.addImage(tankImg);
  Engine.run(engine);
}


function draw() {
  
  background(0,0,0);
  Engine.update(engine);
  soldier1.x = soldier.x;
  soldier1.y = soldier.y;
  //tank1.x = tank.x;
  //tank1.y = tank.y;
  heli.display();
  soldier.display();
  ground1.display();
  if(ground.x<0) {
    ground.x = ground.width;
    }
    if (keyDown("RIGHT_ARROW")) {
      soldier.moveRight();
    }
    if (keyDown("LEFT_ARROW")) {
      soldier.moveLeft();
    }
  tank.display();
 drawSprites();
}

function keyPressed(){
  if (keyCode === 32) {
    Matter.Body.setStatic (soldier.body, false);
  }
}

function mouseDragged(){
grenade = new Grenade(soldier.body.position.x+30,soldier.body.position.y+30,20,20);
grenade.display();
console.log(grenade);
}