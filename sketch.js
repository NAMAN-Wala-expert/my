
var bg,bullet,bullet1,coins,bg_img;
var player1,player2;
var p1_img,p2_img;
var bullet_img,con_img;
var bullet1Group,bulletGroup;
var lives =3,life_img,life1,life2;
var PLAY=1;
var gameState=PLAY;
var END=0;
var boom,bm_img,boom1;
var bullet_1,bullet1_1,bullet_2,bullet1_2,bullet1_3,bullet1_4;
var win,win_img,lose,lose_img;





function preload()
{
  bullet_img = loadImage("bullet.png");
  p1_img = loadImage("plane.png");
  p2_img = loadImage("opponent.png");
  con_img = loadImage("coins.png");
  life_img = loadImage("life.png") 
  bg_img = loadImage("night sky.png");
  bm_img = loadImage("boom-removebg-preview.png");
  win_img = loadImage("win.jpeg");
  lose_img = loadImage("lose.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //frameRate(80);


  bg = createSprite(windowWidth/2,windowHeight/2-8);
  bg.addImage(bg_img);
  bg.scale = 1.5;

  player1 = createSprite(1250,windowHeight/2,30,30);
  player1.addImage(p1_img);
  player1.scale = 0.5;
  player1.rotation=-90;
  //player1.debug=true;

  player2 = createSprite(100,random(100,500),30,30);
  player2.addImage(p2_img);
  player2.scale = 0.5;
  player2.rotation=90;
  //player2.debug=true;

  life = createSprite(1240,50,30,30);
  life.addImage(life_img);
  life.scale = 0.09;

  life1 = createSprite(1280,50,30,30);
  life1.addImage(life_img);
  life1.scale = 0.09;

  life2 = createSprite(1200,50,30,30);
  life2.addImage(life_img);
  life2.scale = 0.09;

  boom = createSprite(1240,player1.y,30,30);
  boom.addImage(bm_img);
  boom.scale = 0.9;
  boom.visible=false;

  boom1 = createSprite(100,player2.y,30,30);
  boom1.addImage(bm_img);
  boom1.scale = 0.9;
  boom1.visible=false;

  win = createSprite(windowWidth/2,windowHeight/2,130,130);
  win.addImage(win_img);
  win.scale = 0.9;
  win.visible=false;

  lose = createSprite(windowWidth/2,windowHeight/2,130,130);
  lose.addImage(lose_img);
  lose.scale = 0.9;
  lose.visible=false;




 

  bulletGroup = new Group();
  bullet1Group = new Group();

  

  




  



  //rectMode(CENTER);
  //textSize(15);
}

function draw() 
{
  background(51);










 



  
 

  //fall down



  drawSprites();
}