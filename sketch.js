var canvas;
var bg;
var player;
var carImage;
var score;
function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    bg = loadImage("images/track.jpg");

    player = createSprite(displayWidth/2,displayHeight/1.1,20,20);
    carImage = loadImage("images/car2.png");

    score = 0;
}

function draw(){
    background("brown");

    image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
    player.addImage("player",carImage);

    camera.position.x = displayWidth/2;
    camera.position.y = player.y;

    if(keyDown(UP_ARROW)){
        player.y = player.y-10;
        score = score+1;
    }
    textSize(18);
    fill(0);
    text("SCORE:"+score,displayWidth/1.3,player.y-330);

    drawSprites();
}
