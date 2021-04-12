var canvas;
var music;
var blockg,blockb,blockr,blocky;
var ball;

var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    blockg = createSprite(0,580,360,30);
    blockg.shapeColor="green";
    
    blockb = createSprite(295,580,200,30);
    blockb.shapeColor="blue";

    blockr = createSprite(515,580,200,30);
    blockr.shapeColor="red";

    blocky = createSprite(740,580,220,30);
    blocky.shapeColor="yellow";

    ball = createSprite(random(20,750) ,100,40,40);
    ball .shapeColor="black";
    ball.velocityX=6;
    ball.velocityY=6;
    
    

}

function draw() {
    background(rgb(169,169,169));
  edge=createEdgeSprites();
  
  ball.bounceOff(edge);

 if(ball.isTouching(blockg)&&ball.bounceOff(blockg)){
     ball.shapeColor="green";
     music.play();
 }
 if(ball.isTouching(blockb)&&ball.bounceOff(blockb)){
    ball.shapeColor="blue";
    music.play();
 }
    
 if(ball.isTouching(blockr)&&ball.bounceOff(blockr)){
    ball.shapeColor="red";
    music.play();
 }

 if(ball.isTouching(blocky)&&ball.bounceOff(blocky)){
    ball.shapeColor="yellow";
    music.play();
 }





  drawSprites();


    //add condition to check if box touching surface and make it box
}
