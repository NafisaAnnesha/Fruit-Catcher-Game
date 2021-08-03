// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, loadImage,
 *    loadAnimation, windowWidth, windowHeight
 *    createButton, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER, circle, random, width, height, noStroke, ellipse, fill
 */

let watermelon;

let fruits;
let numFruit = 3;
let score = 0;

function preLoad() {
  watermelon = loadImage("assets/Watermelon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // IMAGES
  // image(watermelon, 0, 0);
  
  fruits = [];
  
  for (let i = 0; i < numFruit; i++) {
    let newFruit = new Fruit();
    fruits.push(newFruit);
  }
}

class Fruit {
  constructor () {
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
    fill('red') // PLACEHOLDER, replace with image
    ellipse(this.x, this.y, this.radius);
  }
} // end of Fruit

function draw() {
  background(255);

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    fruit.move();
    fruit.display()
  }
}

class Level{
  constructor(button, bg){
    this.button = button;
    this.background = bg;
  }
  
  
}
let bg = loadImage("https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fbg.png?v=1627946598416")
let button = createButton('click me')
  button.position(0, 0);
let welcomeScreen = new Level(bg, button)

