// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill, height,
 *    loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY, random, text
 *    textAlign, width
 *    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER
 */

let boxSprite;
let image;
let imageSprite;
let animation1;
let animatedSprite1;
let animation2;
let animatedSprite2;

function setup() {
  createCanvas(400, 400);

  // Create a sprite with a rectangle as visual component
  boxSprite = createSprite(100, 150, 50, 100);
  boxSprite.shapeColor = color("red");
  
  // Create a sprite and associate an existing image as visual component
//   image = loadImage("assets/asterisk.png");
//   imageSprite = createSprite(300, 150);
//   imageSprite.addImage(image);

  //create a sprite and associate an existing animation as visual component
//   animation1 = loadAnimation(
//     "assets/ghost_standing0001.png",
//     "assets/ghost_standing0007.png"
//   );
//   animatedSprite1 = createSprite(500, 150, 50, 100);
//   animatedSprite1.addAnimation("floating", animation1);

//   animation2 = loadAnimation(
//     "assets/cloud_breathing0001.png",
//     "assets/cloud_breathing0005.png"
//   );
//   animatedSprite2 = createSprite(700, 150, 50, 100);
//   animatedSprite2.addAnimation("breathing", animation2);
}

function draw() {
  background(255);

  fill(0);
  // textAlign(CENTER);
  // text("Click to create a new sprite", width / 2, height / 2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
}
/*
function mousePressed() {
  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}

//Changing the sprites' appearance
//press the mouse and move the cursor to control the animations

function setu2p() {
  createCanvas(800, 300);
}

function draw2() {
  background(255, 255, 255);

  //all the methods and properties of the current animation will be
  //accessible from the .animation property of the sprite

  //stop/play a sprite animation
  if (mouseIsPressed) animatedSprite1.animation.stop();
  else animatedSprite1.animation.play();

  //change the frame in relation to the mouse x position
  // var frame = round(map(mouseX, 0, width, 0, anotherAnimatedSprite.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map

  // anotherAnimatedSprite.animation.changeFrame(frame);

  //draw all the sprites
  drawSprites();
}
*/
