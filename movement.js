// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill,
 *    loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY, random,
 *    text, textAlign, windowWidth, windowHeight, width, height
 *    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER
 */

const CDN = "https://cdn.glitch.com/eeb7d150-fc97-47a5-a1d3-a53d7d323bbe%2F";

let velocity;
let sprite;
let animation;

function setup() {
  createCanvas(windowWidth, windowHeight);

  velocity = 3;

  animation = loadAnimation(
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

  sprite = createSprite(400, 200, 50, 50);
  sprite.addAnimation("breathing", animation);
  sprite.velocity.x = velocity;
  sprite.velocity.y = -velocity;
}

function draw() {
  background(255);

  console.log("width", sprite.width);
  console.log("height", sprite.height);

  if (sprite.position.x < 0 || sprite.position.x > width) {
    sprite.velocity.x = -1 * sprite.velocity.x;
  }

  if (sprite.position.y < 0 || sprite.position.y > height) {
    sprite.velocity.y = -1 * sprite.velocity.y;
  }

  drawSprites();
}
