// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, color, createCanvas, createSprite, drawSprites, loadImage,
 *   textAlign, UP_ARROW, loadAnimation, windowWidth, windowHeight, image, displayScore
 * play,soundFormats,loadSound, noFill, rect,textSize, text,collideEllipseCharacter,collideEllipseImage, collideRectCircle,width, mousePressed, createButton, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER, circle, random, width, height, noStroke, ellipse, fill, mouseX, keyCode
 */

let watermelon, pear, orange, lemon, cherry, banana, apple;
let pics;
let gameIsOver;
let lives;
let scale = 7;
let fruits;
let numFruit;
let score;
let basket;
let character;
let bg1;
let button1;
let bg2;
let button2;
let bg3;
let button3;
let bg4;
let pressed;
let bgImg1;
let bgImg2;
let bgImg3;
let bgImg4;
let nextLevel;
let characterX;
let characterY;
let characterZ;
let restart;
let fallSpeed;
let isJumping;
let jumpHeight;
let jumpDirection;
let badFruit;
let badFruits;
let rottenFruit;
let fruitR;
let button4;

function setup() {
  score = 0;
  lives = 5;
  nextLevel = false;
  pressed = false;
  restart = false;
  restart = false;
  gameIsOver = false;
  createCanvas(windowWidth, windowHeight);
  numFruit = 3;
  badFruit = 2;
  button1 = createButton("click me ");
  //button1.position(300, 400);
 
  button4 = createButton("restart");
  
  rottenFruit = loadImage(
    "https://cdn.glitch.com/80434272-b62e-4f01-b6ac-df848161321c%2FrottenFruit.png?v=1628124919350"
  );
  // Fruit Images
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

  pics = [watermelon, pear, orange, lemon, cherry, banana, apple];

   
  bgImg1 = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fbg.png?v=1627956421954"
  );
  bgImg2 = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fbg2.jpeg?v=1627956440506"
  );
  bgImg3 = loadImage(
    "https://cdn.glitch.com/c2cb5413-90bd-4f0b-8fba-70efb1ea9018%2Fbg3.png?v=1628043067860"
  );
  bgImg4 = loadImage(
    "https://cdn.glitch.com/597f2092-cec7-4b41-a45d-256fd011a110%2FgameOver.gif?v=1628134674213"
  );
  // here we use a callback to display the image after loading.
  // character image.
  character = loadImage(
    "https://cdn.glitch.com/d8cd1a49-283f-47bb-acc5-1f438d6c1b79%2Fa781dc306629a13c363acbbaaafbc2b2.png?v=1627957317192"
  ); // end of character image.

  fruits = [];
  badFruits = [];
  for (let i = 0; i < badFruit; i++) {
    let newBadFruit = new BadFruit();
    badFruits.push(newBadFruit);
  }
  for (let i = 0; i < numFruit; i++) {
    let newFruit = new Fruit();

    fruits.push(newFruit);
  }

  characterX = height - 250;
  characterY = 100;
  characterZ = 100;

  isJumping = false;
  jumpHeight = 50;
  jumpDirection = "UP";
}

class Fruit {
  constructor() {
    this.image = random(pics);
    this.x = random(width);
    this.y = random(height);
    this.radius = random(50, 60);
    this.width = 40;
    this.height = 5;
    this.fallSpeed = random(2, 2.5);
    this.collected = false;
    this.lost = false;
  }

  move() {
    this.y += this.fallSpeed;

    if (this.y > height) {
      this.y = random(50, 200) * -1;
      this.x = random(width);
      this.collected = false;
      this.lost = false;
    }
  }

  display() {
    if (!this.collected && !this.lost) {
      image(this.image, this.x, this.y, this.radius, 40, 5);
    }
  }
} // end of Fruit
class BadFruit {
  constructor() {
    this.rottenFruit = rottenFruit;
    this.x = random(width);
    this.y = random(20, 180) * -1;
    this.radius = 50;
    this.width = 30;
    this.height = 15;
    this.fallSpeed = random(2, 3);
    this.collected = false;
    this.lost = false;
  }
  obstMovement() {
    this.y += this.fallSpeed;

    if (this.y > height) {
      this.y = random(20, 180) * -1;
      this.x = random(width);
      this.collected = false;
      this.lost = false;
    }
  }
  showRottenFruit() {
    if (!this.collected && !this.lost) {
      image(
        this.rottenFruit,
        this.x,
        this.y,
        this.radius,
        this.width,
        this.height
      );
    }
  }
}
function draw() {
  welcomeScreen.display1();

  checkLost();

  button1.mousePressed(() => (pressed = true));
  button4.mousePressed(() => (restart = true));

  if (pressed) {
    level1.display2();
    button1.position(880, 880);
    // for (let i = 0; i < fruits.length; i++) {
    //   let fruit = fruits[i];
    //   fruit.move();
    //   fruit.display();
    // }
  }
     if (restart) {
      reStart();
      button4.position(600,600);
    }

  // character movement according to the mouse.

  // end of charater movement

  fill(200, 80, 80);
  image(character, mouseX - 50, characterX, characterY, characterZ);
  if (score >= 5) {
    nextLevel = true;
  }
  if (nextLevel) {
    score;
    
    this.fallSpeed = random(2, 3);
    level2.display3();
  }

  if (isJumping) {
    if (characterX > height - 250 - jumpHeight && jumpDirection == "UP") {
      characterX -= 5;
    } else if (characterX <= height - 250 - jumpHeight) {
      jumpDirection = "DOWN";
      characterX += 5;
    } else if (characterX < height - 250 && jumpDirection == "DOWN") {
      characterX += 5;
    } else if (characterX >= height - 250) {
      isJumping = false;
      jumpDirection = "UP";
      characterX = height - 250;
    }
  }
}

class Level {
  constructor(bg) {
    //this.button = button;
    this.background = bg;
  }
  display1() {
    bg1 = background(bgImg1, height, width);
    button1.position(80, 540);
  }

  display2() {
    
    bg2 = background(bgImg2, height, width);
    
    river();
    checkLost();
     for (let i = 0; i < fruits.length; i++) {
      let fruit = fruits[i];
      fruit.move();
      fruit.display();
    }
     checkScore();
    //button2 = createButton("play");
   // button2.position(300, 550);
    textSize(30);
    fill(182, 252, 3);
    text(`Fruits Collected: ${score}`, 10, 30);
    text(`Lives: ${lives}`, 10, 60);
    image(character, mouseX - 50, characterX, characterY, characterZ);
   
  }
  display3() {
    bg3 = background(bgImg3);

    //fallSpeed = random(2, 2.5);

    river();
    checkLost();
    for (let i = 0; i < badFruits.length; i++) {
      let badFruit = badFruits[i];
      badFruit.obstMovement();
      badFruit.showRottenFruit();
    }
    for (let i = 0; i < fruits.length; i++) {
      let fruit = fruits[i];
      fruit.move();
      fruit.display();
    }
    checkScore();
    text(`Fruits Collected: ${score}`, 10, 30);
     text(`Lives: ${lives}`, 10, 60);
    fill(200, 80, 80);
    image(character, mouseX - 50, characterX, characterY, characterZ);
  }

  gameOverDisplay() {
    button4.position(300, 400);
    bg4 = background(bgImg4);
   
    textSize(70);
    fill(235, 64, 52);
    
    textAlign(CENTER);
    text("Game Over", 300, 350);
    
    
 
  }
}
function reStart() {
   button4.position(600, 600);
  setup();
 
  welcomeScreen.display1();
}

// character movement according to the mouse.

// end of charater movement

let welcomeScreen = new Level(bg1);
let level1 = new Level(bg2);
let level2 = new Level(bg3);
let gameOver = new Level(bg4);

function checkScore() {
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

    if (hit && !fruit.collected && !gameIsOver) {
      fruit.collected = true;
      score = score + 1;
      if (isJumping) {
        score = score + 1;
      }
      //console.log(score);
    }
  }

  for (let i = 0; i < badFruit; i++) {
    let rottFruit = badFruits[i];
    let hit2 = collideRectCircle(
      mouseX - 50,
      characterX,
      characterY,
      characterZ,
      rottFruit.x,
      rottFruit.y,
      rottFruit.radius
    );
    if (hit2 && !rottFruit.collected && !gameIsOver) {
      rottFruit.collected = true;
      score = score - 1;

      //console.log(score);
    }
  }
  if (lives <= 0 || score < 0) {
    gameIsOver = true;
  }
  if (gameIsOver) {
    gameOver.gameOverDisplay();
  }
}
function checkLost() {
  for (let i = 0; i < numFruit; i++) {
    let fruit = fruits[i];
    let lost = collideRectCircle(
      0,
      height - 100,
      width,
      100,
      fruit.x,
      fruit.y,
      fruit.radius
    );
    if (lost && !fruit.lost && !fruit.collected && !gameIsOver) {
      fruit.lost = true;
      lives = lives - 1;
    }
  }
  for (let i = 0; i < badFruit; i++) {
    let rottFruit = badFruits[i];
    let lost = collideRectCircle(
      0,
      height - 100,
      width,
      100,
      rottFruit.x,
      rottFruit.y,
      rottFruit.radius
    );
    if (lost && !badFruit.lost && !badFruit.collected) {
      rottFruit.lost = true;
    }
  }
}
function river() {
  fill(53, 195, 242);
  rect(0, height - 100, width, 100);
}
// function resetScore(){
//   score =0;
//   fallSpeed = random(1.5,2)

// }

// Use up arrow to jump.
function keyPressed() {
  //console.log(keyCode);
  if (keyCode == UP_ARROW) {
    isJumping = true;
  }
}
