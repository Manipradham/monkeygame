
var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
 
  stroke("white");
  textSize(15);
  fill("white");
  text("Score: " + score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate());
  text("survivalTime: " + survivalTime,100,50);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

spawnobstacle();
spawnbanana();


function draw() {
background(255);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey. collide(ground);
  
  drawSprites();
  
}

function spawnbanana() {
  if(frameCount % 80 === 0){
    banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -6;
    banana.addImage(bananaImage);
    banana.lifetime = 300; 
    monkey.depth = banana.depth ;
    bananaGroup.add(banana);
  }
}

function spawnobstacle(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(800,320,10,40);
    obstacle.x = -6;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
  }
}

