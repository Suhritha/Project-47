var ground;
var airLand;
var person;
var landGroup;
var lives=0;
var coronaGroup,faceMaskGroup,infectedPersonGroup,invisibleSpriteGroup

function preload() {
	landImage = loadImage("floating land.png");
    c1 = loadImage("Corona Virus/1.png");
    c2 = loadImage("Corona Virus/2.png");
    c3 = loadImage("Corona Virus/3.png");
    c4 = loadImage("Corona Virus/4.png");
    c5 = loadImage("Corona Virus/5.png");
    c6 = loadImage("Corona Virus/6.png");
    c7 = loadImage("Corona Virus/7.png");
    c8 = loadImage("Corona Virus/8.png");
    c9 = loadImage("Corona Virus/9.png");
    c10 = loadImage("Corona Virus/10.png");

    f1 = loadImage("Face Mask/1.png")
    f2 = loadImage("Face Mask/2.png")
    f3 = loadImage("Face Mask/3.png")
    f4 = loadImage("Face Mask/4.png")
    f5 = loadImage("Face Mask/5.png")
    f6 = loadImage("Face Mask/6.png")
    f7 = loadImage("Face Mask/7.png")
    f8 = loadImage("Face Mask/8.png")
    f9 = loadImage("Face Mask/9.png")

    ip1 = loadImage("Infected Person/1.png")
    ip2 = loadImage("Infected Person/2.png")
    ip3 = loadImage("Infected Person/3.png")
    ip4 = loadImage("Infected Person/4.png")
    ip5 = loadImage("Infected Person/5.png")
    ip6 = loadImage("Infected Person/6.png")

    bgImage = loadImage("Hospital BGs/bg3.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight-200);

  ground = createSprite(100, displayHeight-210, 3000, 20);
  ground.shapeColor="brown";

  person = createSprite(100,displayHeight-250,20,60);
  person.shapeColor="black";
  landGroup = new Group();
  person.debug=true;

  coronaGroup = new Group()
  faceMaskGroup = new Group()
  infectedPersonGroup = new Group()
  invisibleSpriteGroup = new Group()
}


function draw() {
  background("lightBlue"); 
  textSize(25);
  fill("black");
  text("LIVES : " + lives,50,100);
  ground.velocityX = -3;
  if(ground.x < 0 ){
  	ground.x = 300;
  } 

  if(keyDown("space")){
  	person.velocityY = -10;

  }
    person.velocityY+=0.8;
   

  if(keyDown(LEFT_ARROW)){
  	person.x-=20
  	
  }

  if(keyDown(RIGHT_ARROW)){
  	person.x+=20
  	
  }
if(person.isTouching(invisibleSpriteGroup)){
	person.velocityY=0;
  person.collide(invisibleSpriteGroup);
}

if(person.isTouching(faceMaskGroup))
{
  lives = lives + 1
  faceMaskGroup.destroyEach()
}

  floatingLand();
  person.collide(ground);
  drawSprites();
}

function floatingLand(){
	if(frameCount % 200 === 0){
      airLand= createSprite(displayWidth-100,200,50,10);
      airLand.y = Math.round(random(100,displayHeight-250))

      invisibleSprite = createSprite(airLand.x,airLand.y ,200,10)
      invisibleSprite.visible = false
      invisibleSprite.shapeColor = "red"

      invisibleSprite.velocityX = -3

      invisibleSpriteGroup.add(invisibleSprite)

      spawnCorona(airLand.x,airLand.y)
      spawnFaceMask(airLand.x,airLand.y)
      spawnInfectedPerson(airLand.x,airLand.y)
      
      airLand.shapeColor="blue";
      landGroup.add(airLand);
      airLand.velocityX = -3;
      airLand.addImage(landImage);
      airLand.scale=0.5; 

airLand.depth=person.depth
person.depth=person.depth+1
airLand.debug = true;
airLand.setCollider("circle",0,0,50);

      
	}
}

function spawnCorona(xPos,yPos){
  if(frameCount % 300 === 0){

    obstacle = createSprite(100,200,50,30);
      obstacle.x=xPos
      obstacle.y=yPos
      
      obstacle.velocityX = -3;
      obstacle.scale = 0.09;
      coronaGroup.add(obstacle)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : obstacle.addImage(c1);
        break
        case 2 : obstacle.addImage(c2);
        break
        case 3 : obstacle.addImage(c3);
        break
        case 4 : obstacle.addImage(c4);
        break
        case 5 : obstacle.addImage(c5);
        break
        case 6 : obstacle.addImage(c6);
        break
        case 7 : obstacle.addImage(c7);
        break
        case 8 : obstacle.addImage(c8);
        break
        case 9 : obstacle.addImage(c9);
        break
        case 10 : obstacle.addImage(c10);
        break
        default : break
      }
  }
}


function spawnFaceMask(xPos,yPos){
  if(frameCount % 400 === 0){

    var faceMask = createSprite(100,200,50,30);
      faceMask.x=xPos
      faceMask.y=yPos
      
      faceMask.velocityX = -3;
      faceMask.scale = 0.05;

      faceMaskGroup.add(faceMask)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : faceMask.addImage(f1);
        break
        case 2 : faceMask.addImage(f2);
        break
        case 3 : faceMask.addImage(f3);
        break
        case 4 : faceMask.addImage(f4);
        break
        case 5 : faceMask.addImage(f5);
        break
        case 6 : faceMask.addImage(f6);
        break
        case 7 : faceMask.addImage(f7);
        break
        case 8 : faceMask.addImage(f8);
        break
        case 9 : faceMask.addImage(f9);
        break
        
        default : break
      }
  }
}

function spawnInfectedPerson(xPos,yPos){
  if(frameCount % 500 === 0){

    var infectedPerson = createSprite(100,200,50,30);
      infectedPerson.x=xPos
      infectedPerson.y=yPos
      
      infectedPerson.velocityX = -3;
      infectedPerson.scale = 0.05;

      infectedPersonGroup.add(infectedPerson)

      var rand = Math.round(random(1,10));
      switch(rand){
        case 1 : infectedPerson.addImage(ip1);
        break
        case 2 : infectedPerson.addImage(ip2);
        break
        case 3 : infectedPerson.addImage(ip3);
        break
        case 4 : infectedPerson.addImage(ip4);
        break
        case 5 : infectedPerson.addImage(ip5);
        break
        case 6 : infectedPerson.addImage(ip6);
        break
        
        
        default : break
      }
  }
}







