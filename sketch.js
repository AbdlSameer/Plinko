const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;

var gameState = "onSling";
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;


function setup(){
    var canvas = createCanvas(480,750);
    engine = Engine.create();
    world = engine.world;
    
  ground = new Ground(600,height,2000,20);
  bodder1 = new Ground(480,height,20,2000);
  bodder2 = new Ground(0,height,20,2000);
  bottom = new Division(0,height-10,1000,10);

  
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

  for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
   
   
}

function draw(){
    background("black");

    Engine.update(engine);
    
    for (var i = 0; i < plinkos.length; i++) 
  {
     
   plinkos[i].display();
     
  }

     if(frameCount%60===0)
    {
     particles.push(new Particals(random(width/2-10, width/2+10), 10,10));
     
    }

  for (var j = 0; j < particles.length; j++) 
    {
   
     particles[j].display();
    }

    for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
  bottom.display(); 
  bodder1.display();
  bodder2.display();
  ground.display();     
}

