/*---------------variables-----------------------------------------*/
var dd
var land, obstaclesGroup, birdGroup, score

//load pictures and animations 
function preload(){
  //kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  //jungleImage = loadImage("assets/bg.png");
  
}

function setup() {
  createCanvas(1980, 1080);

  dd = createSprite(320, 80, 150, 150);
  dd.setCollider("circle",0,0,74) 
  dd.debug = true

  land = createSprite(990, 950, 1980, 20);
  obstaclesGroup = new Group(); 
  birdGroup = new Group();
  //jungle = createSprite(400,100,400,20);
  //jungle.addImage("jungle",jungleImage);
  //jungle.scale=0.3
  //jungle.x = width /2;

  //kangaroo = createSprite(50,200,20,50);
  //kangaroo.addAnimation("running", kangaroo_running);
  //kangaroo.addAnimation("collided", kangaroo_collided);
  //kangaroo.scale = 0.15;
  //kangaroo.setCollider("circle",0,0,300)
  
  //shrubsGroup = new Group();
  //obstaclesGroup = new Group();
  
  score = 80;
}

function draw() {
  background("skyblue");
  
  dd.collide(land)
  dd.velocityY = dd.velocityY + 1.9
  
  textSize(52);
  fill("black")
  textStyle(BOLD);
  text("Score: "+ score, 1700,140);
  score.scale = 5
  score = score + Math.round(getFrameRate()/61);
  //score.style.fontSize = "150%"
  //text("High Score :"+ highscore,400,50)  
  
  for (var i = 0; i < birdGroup.length; i++) {
    if (birdGroup.get(i).x < -20) {
      birdGroup.get(i).remove();
    }
  }



  // check if any obstacles are off the screen, and remove them from the group
  for (var i = 0; i < obstaclesGroup.length; i++) {
    if (obstaclesGroup.get(i).x < -20) {
      obstaclesGroup.get(i).remove();
    }
  }
  obstaclesGroup.draw();

  if(score > 100){
    bird()
  } 

  


  if (keyDown("l")){
    console.log(mouseX,mouseY)
  }

  ctrl();
  oobbss();
  //bird() 
  drawSprites();
}




function ctrl(){
  
  if(keyWentDown("ctrl")){
    dd.height = 420
    dd.y = 900
    dd.setCollider("rectangle",0,1)
  }

  if(keyWentDown("space")&& dd.height === 420) {
    dd.velocityY = -39;
  }

  if(keyWentDown("space")&& dd.y >= 750) {
    dd.velocityY = -39;
  }

}
//***************************************************************

function oobbss() {
  if (frameCount % 60 === 0) {
    var obs = createSprite(1930, random(830, 930), 100, 400);
    obs.velocityX = -16;
    obs.depth = obs.depth + 5;
    obstaclesGroup.add(obs); // add the obstacle to the group
    console.log(obstaclesGroup.length); // output the number of obstacles in the group
  }
}

function bird(){
 if (frameCount % 120 === 0){
  var brd = createSprite(1920, random(930, 650, 240), 150,80)
  brd.velocityX = -15
  birdGroup.add(brd);
  console.log("brd" + birdGroup.length);
  console.log(brd.y)
 }

}

