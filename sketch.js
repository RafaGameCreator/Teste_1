const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var bolas = [];
var piromis = []
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {


  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle)
  cannonB = new CB(cannon.x, cannon.y)

  supiromison = new Supiromi(width - 79, height + 60, 170, 170, -80)
}

function draw() {
  image(backgroundImg, 0, 0, 1200, 600)
  Engine.update(engine);
  HeWasTheOneThatMadeUs()

  rect(ground.position.x, ground.position.y, width * 2, 1);


  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display()
  //cannonB.display2();
  for(var i = 0; i < bolas.length; i++){
    GatinhoVaiEmboraENaoChora(bolas[i], i)
  }
}

function keyReleased(){
  if(keyCode === 32){
    bolas[bolas.length - 1].VAILOGUINHOSAOLONGUINHO()
  }
}

function keyPressed() {
  if(keyCode === 32){
    var cannonB = new CB(cannon.x, cannon.y);
    bolas.push(cannonB)
  }
}

function GatinhoVaiEmboraENaoChora(cannonB, i){
  if(cannonB){
    cannonB.display2();
  }
}

function HeWasTheOneThatMadeUs() {
  if(piromis.length > 0){
    if(
      piromis[piromis.length - 1] === undefined || piromis[length - 1].body.position.x < width - 300
    ){
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var piromi = new Supiromi(width, height - 100, 170, 170, position);
      piromis.push(piromi)
    }
    for(var i = 0; i < piromis.length; i++){
      if(piromis[i]){
        Matter.Body.setVelocity(piromis[i].body, {
          x: -0.9,
          y: 0,
        });
        piromis[i].VaiQuemQuer();
      }
    }
  }
  else{
    var piromi = new Supiromi(width, height - 60, 170, 170, -60)
    piromis.push(piromi)
  }
}