// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill,
 *    loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY, random,
 *    text, textAlign, windowWidth, windowHeight
 *    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER
 */

const CDN = "https://cdn.glitch.com/eeb7d150-fc97-47a5-a1d3-a53d7d323bbe%2F";

let cloudVelocity;
let cloudSprite;
let cloudBreathingAnimation;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cloudVelocity = 3;

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

  cloudSprite = createSprite(400, 200);
  cloudSprite.addAnimation("breathing", cloudBreathingAnimation);
  cloudSprite.velocity.x = cloudVelocity;
}

function draw() {
  background(255);

  if (
    cloudSprite.position.x < 0 ||
    cloudSprite.position.x > windowWidth - cloudSprite.width
  ) {
    cloudSprite.position.x = -1 * cloudVelocity;
  }

  if (
    cloudSprite.position.y < 0 ||
    cloudSprite.position.y > windowHeight - cloudSprite.height
  ) {
    cloudSprite.position.y = -1 * cloudVelocity;
  }

  drawSprites();
}

function mousePressed() {
  cloudSprite.visible = !cloudSprite.visible;
}
