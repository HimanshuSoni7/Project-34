//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

var dogImg1;

function preload(){
  //load images here
  dogImg1=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

function draw(){ 
  background(46,139,87); 
  image(dogImg1,170,250,200,250);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }

  drawSprites();
  //add styles here
  fill(255,255,254);
  textSize(25);
  text("Food remaining : "+foodS,150,100);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x })
}