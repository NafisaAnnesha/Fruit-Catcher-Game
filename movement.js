// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, fill, height,
 *    loadImage, loadAnimation, mouseIsPressed, mouseX, mouseY, random, text
 *    textAlign, width, windowWidth, windowHeight
 *    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER
 */

const CDN = "https://cdn.glitch.com/eeb7d150-fc97-47a5-a1d3-a53d7d323bbe%2F";

let cloudSprite;
let cloudBreathingAnimation;

function setup() {
  createCanvas(800, 400);

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
  cloudSprite = createSprite(400, 200, 50, 100);
  cloudSprite.addAnimation("breathing", cloudBreathingAnimation);
  cloudSprite.velocity.x = 3;

  // cloudSprite = createSprite(400, 200);
  // cloudSprite.addAnimation('normal', 'assets/cloud_breathing0001.png', 'assets/cloud_breathing0009.png');
}

function draw() {
  background(255);

  //sprites' visibility can be turned on an off
  //and invisible sprite is still updating normally
  if (mouseIsPressed) {
    cloudSprite.visible = false;
  } else {
    cloudSprite.visible = true;
  }

  if (cloudSprite.position.x > width) {
    cloudSprite.position.x = 0;
  }

  //draw the sprites
  drawSprites();
}

//every mouse press
function mousePressed() {
  //create a sprite
  var splat = createSprite(mouseX, mouseY);
  splat.addAnimation(
    "normal",
    "assets/asterisk_explode0001.png",
    "assets/asterisk_explode0011.png"
  );

  //set a self destruction timer (life)
  splat.life = 40;
}
