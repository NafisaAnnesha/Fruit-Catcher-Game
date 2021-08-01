// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill,
 *    loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY, random,
 *    text, textAlign, windowWidth, windowHeight, width, height
 *    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER
 */

const CDN = "https://cdn.glitch.com/eeb7d150-fc97-47a5-a1d3-a53d7d323bbe%2F";

let sprite;
let floating;
let moving;
let spinning;

function setup() {
  createCanvas(windowWidth, windowHeight);

  floating = loadAnimation(
    `${CDN}ghost_standing0001.png`,
    `${CDN}ghost_standing0002.png`,
    `${CDN}ghost_standing0003.png`,
    `${CDN}ghost_standing0004.png`,
    `${CDN}ghost_standing0005.png`,
    `${CDN}ghost_standing0006.png`,
    `${CDN}ghost_standing0007.png`
  );
  moving = loadAnimation(
    `${CDN}ghost_walk0001.png`,
    `${CDN}ghost_walk0002.png`,
    `${CDN}ghost_walk0003.png`,
    `${CDN}ghost_walk0004.png`
  );
  spinning = loadAnimation(
    `${CDN}ghost_spin0001.png`,
    `${CDN}ghost_spin0002.png`,
    `${CDN}ghost_spin0003.png`,
    `${CDN}ghost_spin0004.png`
  );

  sprite = createSprite(400, 200);

  sprite.addAnimation("floating", floating);

  sprite.addAnimation("moving", moving);

  sprite.addAnimation("spinning", spinning);
}

function draw() {
  background(255);

  if (mouseX < sprite.position.x - 10) {
    sprite.changeAnimation("moving");
    //flip horizontally
    sprite.mirrorX(-1);
    //negative x velocity: move left
    sprite.velocity.x = -2;
  } else if (mouseX > sprite.position.x + 10) {
    sprite.changeAnimation("moving");
    //unflip
    sprite.mirrorX(1);
    sprite.velocity.x = 2;
  } else {
    //if close to the mouse, don't move
    sprite.changeAnimation("floating");
    sprite.velocity.x = 0;
  }

  if (mouseIsPressed) {
    //the rotation is not part of the spinning animation
    sprite.rotation -= 10;
    sprite.changeAnimation("spinning");
  } else sprite.rotation = 0;

  //up and down keys to change the scale
  //note that scaling the image quality deteriorates
  //and scaling to a negative value flips the image
  if (keyIsDown(UP_ARROW)) sprite.scale += 0.05;
  if (keyIsDown(DOWN_ARROW)) sprite.scale -= 0.05;

  //draw the sprite
  drawSprites();
}
