const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var floor, cannonBase, cannon, cannonBall;

var boxes = [];
var balls = [];

var spawnBoxButton;

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;

  var floor_options = {
    isStatic: true
  }

  floor = Bodies.rectangle(0, height - 20, width, 20, floor_options);
  World.add(world, floor);

  cannonBase = new CannonBase(100, height - 100, 45, 80);

  cannon = new Cannon(80, height - 100, 90, 40);

  spawnBoxButton = createButton("Spawn Box");
  spawnBoxButton.position(width / 2 - 100, 30);
  spawnBoxButton.size(50, 30);
  spawnBoxButton.mouseClicked(onSpawnBoxButtonClicked);
}

function draw() {
  background(200, 200, 255);

  Engine.update(engine);

  push();
  fill(10, 0, 0);
  rect(floor.position.x, floor.position.y, width, 20);
  pop();

  cannonBase.display();
  cannon.display();

  for (var box of boxes) {
    box.display();
  }

  for (var ball of balls) {
    if (ball) {
      ball.display();
    }
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    cannonBall = new Ball(cannon.x, cannon.y, 50);
    Matter.Body.setAngle(cannonBall.body, cannon.body.angle);
    balls.push(cannonBall);
  }
}

/*function checkCollision(index) {
  for (var box of boxes) {
    if (box != undefined && floor != undefined) {
      var collision = Matter.SAT.collides(box.body, floor);

      if (collision.collided) {

      }
    }
  }
}*/

function onSpawnBoxButtonClicked() {
  var box = new Box(random(600, height - 75), 50, 50, 50);

  boxes.push(box);
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    cannonBall.shoot();
    console.log("cannon fired");
  }
}