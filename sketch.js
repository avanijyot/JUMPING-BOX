//to create the sprite objects
var canvas;

var music;

var box; 

var surface1, surface2, surface3, surface4;

//to preload the sound 
function preload(){

    music = loadSound("music.mp3");

}

function setup(){

    //to create the canvas
    canvas = createCanvas(800,600);

    //to create the box
    box = createSprite(random(20, 750), 200, 30, 30); 
    box.shapeColor = "white";
    box.velocityX = 6;
    box.velocityY = 1;

    //to create the surfaces
    surface1 = createSprite(105, 550, 150, 20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300, 550, 150, 20);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(500, 550, 150, 20);
    surface3.shapeColor = "red";

    surface4 = createSprite(695, 550, 150, 20);
    surface4.shapeColor = "green";

}

function draw() {
    
    //to give the background
    background("grey");

    //to play the music
    music.play();

    //to create the edge sprites
    edges = createEdgeSprites();

    //to make the box bounce off 
    box.bounceOff(edges);

    //to draw the objects
    drawSprites();

    //to check if the box is touching the surfaces 
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

}
