// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, loadImage,
 *    loadAnimation, windowWidth, windowHeight, image, displayScore
 *    createButton, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER, circle, random, width, height, noStroke, ellipse, fill
 */

let watermelon, pear, orange, lemon, cherry, banana, apple;
let scale = 7;
let fruits;
let numFruit = 3;
let score = 0;
let basket;
let img;

function preLoad() {
  watermelon = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FWatermelon.png?v=1627948820847"
  );
  pear = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FPear.png?v=1627948814175"
  );
  orange = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FOrange.png?v=1627948802920"
  );
  lemon = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FLemon.png?v=1627948795527"
  );
  cherry = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FCherry.png?v=1627948787922"
  );
  banana = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FBanana.png?v=1627948780734"
  );
  apple = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FApple.png?v=1627948772526"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // here we use a callback to display the image after loading.
  img = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2FfruitCollector.jpg?v=1627949883831"
  );

  fruits = [];

  for (let i = 0; i < numFruit; i++) {
    let newFruit = new Fruit();
    fruits.push(newFruit);
  }
}

class Fruit {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.radius = random(20, 30);
    this.fallSpeed = random(0.5, 1);
  }

  move() {
    this.y += this.fallSpeed;

    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  display() {
    noStroke();
    fill("red"); // PLACEHOLDER, replace with image
    ellipse(this.x, this.y, this.radius);
  }
} // end of Fruit

function draw() {
  background(255);

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    fruit.move();
    fruit.display();
  }

  // fruitCollector image.
  image(img, 320, 390, 100, 100);

  // Images
  image(watermelon, 0, 0, 1150 / (scale + 4), 475 / (scale + 4));
  image(pear, 0, 0, 239 / scale, 359 / scale);
  image(orange, 0, 0, 239 / scale, 237 / scale);
  image(lemon, 250, 0, 212 / scale, 286 / scale);
  image(cherry, 150, 0, 686 / scale, 444 / scale);
  image(banana, 140, 0, 327 / scale, 420 / scale);
  image(apple, 70, 0, 239 / scale, 270 / scale);
}

class Level {
  constructor(button, bg) {
    this.button = button;
    this.background = bg;
  }
}
let bg = loadImage(
  "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fbg.png?v=1627946598416"
);
let button = createButton("click me");
button.position(0, 0);
let welcomeScreen = new Level(bg, button);
