const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var box1, ground1;

var img;

function setup() {
    var canvas = createCanvas(1350, 650);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(width/2, 630, width, 15);

    img = loadImage("dustbingreen.png");
    
    packageBox_1= new ground(857,470,15,300)
    packageBox_3= new ground(1144,470,15,300);
    packageBox_2= new ground(1000,615,300,15);
    box1 = new BaseClass(200, 450, 50, 50);
	
    Engine.run(engine);
}

function draw() {
    background(0);
    
    
    ground1.display();
    packageBox_1.display();
    packageBox_2.display();
    packageBox_3.display();
    box1.display();
    imageMode(CENTER);
    image(img, 1000,470,325,325)
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
       Matter.Body.applyForce(box1.body, box1.body.position,{x:130,y:-145})
    }
  }

