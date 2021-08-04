// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, loadImage,
 *    loadAnimation, windowWidth, windowHeight, image, displayScore
 *  rect,textSize, text,collideEllipseCharacter,collideEllipseImage, collideRectCircle,width, mousePressed, createButton, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER, circle, random, width, height, noStroke, ellipse, fill, mouseX
 */

let watermelon, pear, orange, lemon, cherry, banana, apple;
let scale = 7;
let fruits;
let numFruit = 3;
let score = 0;
let basket;
let character;
let bg1;
let button1;
let bg2;
let button2;
let bg3;
let button3;
let pressed = false;
let bgImg1;
let bgImg2;
let bgImg3;

let characterX;
let characterY;
let characterZ;
let fruitX;
let fruitY;
let fruitR;
let count = 0;

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
  button1 = createButton("click me ");
  fruitX = random(width);
  fruitY = 0;
  fruitR = random(20, 30)

  button1.position(300, 400);
  bgImg1 = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fbg.png?v=1627956421954"
  );
  bgImg2 = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fbg2.jpeg?v=1627956440506"
  );
 bgImg3 = loadImage('https://cdn.glitch.com/c2cb5413-90bd-4f0b-8fba-70efb1ea9018%2Fbg3.png?v=1628043067860')
  // here we use a callback to display the image after loading.
  // character image.
  character = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fa781dc306629a13c363acbbaaafbc2b2.png?v=1627957317192"
  ); // end of character image.

  fruits = [];

  for (let i = 0; i < numFruit; i++) {
    let newFruit = new Fruit();
    fruits.push(newFruit);
      
    characterX = 300;
    characterY = 100;
    characterZ = 150;
  }
}

class Fruit {
  constructor() {
    this.x = fruitX;
    this.y = fruitY;
    this.radius = fruitR;
    this.fallSpeed = random(1.5, 1);
    this.collected = false;
    this.lost = false;
  }

  move() {
    this.y += this.fallSpeed;

    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
      this.collected = false;
      this.lost = false;
    }
  }

  display() {
    if (!this.collected && !this.lost) {
      noStroke();
      fill("red"); // PLACEHOLDER, replace with image
      ellipse(this.x, this.y, this.radius);
    }
  }
} // end of Fruit

function draw() {
  welcomeScreen.display1();

  checkCollisions();
  checkLost();
  button1.mousePressed(() => (pressed = true));
  if (pressed) {
    level1.display2();
    button1.position(880, 880);
    for (let i = 0; i < fruits.length; i++) {
      let fruit = fruits[i];
      fruit.move();
      fruit.display();
    }
// if (score === 5){
//   level2.display3();
//    for (let i = 0; i < fruits.length; i++) {
//       let fruit = fruits[i];
//       fruit.move();
//       fruit.display();
// }
    // character movement according to the mouse.
    fill(200, 80, 80);
    image(character, mouseX - 50, characterX, characterY, characterZ);
    // end of charater movem
  }
  if(score===5){
    level3.display3()
  }
}
  //   // fruitCollector image.
  //   image(img, 320, 390, 100, 100);

  //   // Images
  //   image(watermelon, 0, 0, 1150 / (scale + 4), 475 / (scale + 4));
  //   image(pear, 0, 0, 239 / scale, 359 / scale);
  //   image(orange, 0, 0, 239 / scale, 237 / scale);
  //   image(lemon, 250, 0, 212 / scale, 286 / scale);
  //   image(cherry, 150, 0, 686 / scale, 444 / scale);
  //   image(banana, 140, 0, 327 / scale, 420 / scale);
  //   image(apple, 70, 0, 239 / scale, 270 / scale);


class Level {
  constructor(bg) {
    //this.button = button;
    this.background = bg;
  }
  display1() {
    bg1 = background(bgImg1, height, width);
  }

  display2() {
    bg2 = background(bgImg2, height, width);
    button2 = createButton("play");
    button2.position(300, 550);
    textSize(30);
    fill(182, 252, 3);
    text(`Fruits Collected: ${score}`, 10, 30);
    function river() {
 fill( 53, 195, 242)
  rect(0, 500, width, 50);
}
    
    river()
  }
  display3(){
    score = 0;
    bg3 = background(bgImg3)
    text(`Fruits Collected: ${score}`, 10, 30);
      function river() {
 fill( 53, 195, 242)
  rect(0, 500, width, 50);
}
  }
}

let welcomeScreen = new Level(bg1);
let level1 = new Level(bg2);
let level2 = new Level(bg3)

function checkCollisions() {
  for (let i = 0; i < numFruit; i++) {
    let fruit = fruits[i];
    let hit = collideRectCircle(
      mouseX - 50,
      characterX,
      characterY,
      characterZ,
      fruit.x,
      fruit.y,
      fruit.radius
    );
    if (hit && !fruit.collected) {
      fruit.collected = true;
      score = score + 1;
     
      //console.log(score);
    }
  }
}
function checkLost() {
  for (let i = 0; i < numFruit; i++) {
    let fruit = fruits[i];
    let lost = collideRectCircle(
      0, 500, width, 50,
     fruit.x,
      fruit.y,
      fruit.radius
    );
    if (lost && !fruit.lost && !fruit.collected) {
      fruit.lost = true;
      score = score -1
      console.log(count);
    }
  }
}
