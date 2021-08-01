// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill,
 *    loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY, random,
 *    text, textAlign, windowWidth, windowHeight
 *    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER
 */

const CDN = "https://cdn.glitch.com/eeb7d150-fc97-47a5-a1d3-a53d7d323bbe%2F";

let boxSprite;
let image;
let asteriskSprite;
let cloudBreathingAnimation;
let cloudSprite;
let ghostStandingAnimation;
let ghostSprite;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create a rectangle sprite
  boxSprite = createSprite(100, 150, 50, 100);
  boxSprite.shapeColor = color("red");

  // Create an image sprite
  image = loadImage(`${CDN}asterisk.png`);
  asteriskSprite = createSprite(300, 150);
  asteriskSprite.addImage(image);

  // Create a "breathing" animation sprite
  cloudBreathingAnimation = loadAnimation(
    `${CDN}cloud_breathing0001.png`,
    `${CDN}cloud_breathing0002.png`,
    `${CDN}cloud_breathing0003.png`,
    `${CDN}cloud_breathing0004.png`,
    `${CDN}cloud_breathing0005.png`,
    `${CDN}cloud_breathing0006.png`,
    `${CDN}cloud_breathing0007.png`,
    `${CDN}cloud_breathing0008.png`,
    `${CDN}cloud_breathing0009.png`
  );
  cloudSprite = createSprite(500, 150);
  cloudSprite.addAnimation("breathing", cloudBreathingAnimation);

  // Create a "floating" animation sprite
  ghostStandingAnimation = loadAnimation(
    `${CDN}ghost_standing0001.png`,
    `${CDN}ghost_standing0002.png`,
    `${CDN}ghost_standing0003.png`,
    `${CDN}ghost_standing0004.png`,
    `${CDN}ghost_standing0005.png`,
    `${CDN}ghost_standing0006.png`,
    `${CDN}ghost_standing0007.png`
  );
  ghostSprite = createSprite(700, 150);
  ghostSprite.addAnimation("floating", ghostStandingAnimation);
}

function draw() {
  background(255);

  drawSprites();
}
/*
function draw2() {
  background(255, 255, 255);

  //all the methods and properties of the current animation will be
  //accessible from the .animation property of the sprite

  //stop/play a sprite animation
  if (mouseIsPressed) cloudSprite.animation.stop();
  else cloudSprite.animation.play();

  //change the frame in relation to the mouse x position
  // var frame = round(map(mouseX, 0, width, 0, anotherAnimatedSprite.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map

  // anotherAnimatedSprite.animation.changeFrame(frame);

  //draw all the sprites
  drawSprites();
}
*/
