// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill,
 *    keyIsDown, loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY,
 *    random, text, textAlign, windowWidth, windowHeight
 *    UP_ARROW, DOWN_ARROW
 */

const CDN = "https://cdn.glitch.com/eeb7d150-fc97-47a5-a1d3-a53d7d323bbe%2F";

let velocity;
let sprite;
let floating;
let moving;
let spinning;

function setup() {
  createCanvas(windowWidth, windowHeight);

  velocity = 2;

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
    `${CDN}ghost_spin0003.png`
  );

  sprite = createSprite(400, (1 / 2) * windowHeight);
  sprite.addAnimation("floating", floating);
  sprite.addAnimation("moving", moving);
  sprite.addAnimation("spinning", spinning);
}

function draw() {
  background(255);

  if (mouseX < sprite.position.x - 10) {
    sprite.changeAnimation("moving");
    sprite.mirrorX(-1);
    sprite.velocity.x = -velocity;
  } else if (mouseX > sprite.position.x + 10) {
    sprite.changeAnimation("moving");
    sprite.mirrorX(1);
    sprite.velocity.x = velocity;
  } else {
    sprite.changeAnimation("floating");
    sprite.velocity.x = 0;
  }

  if (mouseIsPressed) {
    sprite.rotation -= 10;
    sprite.changeAnimation("spinning");
  } else {
    sprite.rotation = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    sprite.scale += 0.05;
  }
  if (keyIsDown(DOWN_ARROW)) {
    sprite.scale -= 0.05;
  }

  if (mouseIsPressed) {
    sprite.visible = !sprite.visible;
  }

  drawSprites();
}
