/* global
 *    background, color, createCanvas, createSprite, drawSprites, loadImage,
 *   textAlign, UP_ARROW, loadAnimation, windowWidth, windowHeight, image, displayScore
 * square, play, textFont, textBold, createAudio, loadsound, textAlign,play,soundFormats,loadSound, noFill, rect,textSize, text,collideEllipseCharacter,collideEllipseImage, collideRectCircle,width, mousePressed, createButton, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, CENTER, circle, random, width, height, noStroke, ellipse, fill, mouseX, keyCode
 */

let fruits;
let watermelon, pear, orange, lemon, cherry, banana, apple;
let rottenFruit, badFruit, badFruits;
let numFruit;

let lvl;
let lvl1;
let lvl2;
let finish;
let rottenFruitSound;

let pics;
let gameIsOver;

let welcomeSound;
let level1Sound;
let level2Sound;
let gameOverSound;

let lives;
let score;

let mySound;
let character, characterX, characterY, characterZ;
let isJumping, jumpHeight, jumpDirection;

let bg1, bg2, bg3, bg4;
let button1, button2, button3, button4;
let bgImg1, bgImg2, bgImg3, bgImg4;

let pressed;
let pressed2;
let nextLevel;
let restart;
let fallSpeed;
// let fruitR;

let jumpSound;
let fallingSound;

function setup() {
  lvl = true;
  
  lvl1 = false;
  lvl2 = false;
  finish = false;
  welcomeSound = createAudio(
    "https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2FDefense%20Line.mp3?v=1628214995780"
  );
  mySound = createAudio(
    "https://cdn.glitch.com/597f2092-cec7-4b41-a45d-256fd011a110%2Fmixkit-extra-bonus-in-a-video-game-2045.mp3?v=1628145860740"
  );
  level1Sound = createAudio(
    "https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2F03%20BGM%20%2303.mp3?v=1628216649532"
  );
  level2Sound = createAudio(
    "https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2F16%20BGM%20%2316.mp3?v=1628217151230"
  );
  gameOverSound = createAudio("https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2F10%20BGM%20%2310.mp3?v=1628222982556");
  
  jumpSound = createAudio('https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2F26%20Jingle%20%2304.mp3?v=1628223653865')
  rottenFruitSound = createAudio('https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2F46.mp3?v=1628223849149')
  fallingSound = createAudio('https://cdn.glitch.com/1a5da310-9b8a-4d3a-9819-d5ce77569473%2F9RLYMKT-splash.mp3?v=1628224196061')
  
  
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
  let col = color(25, 23, 200, 50);
  button1 = createButton("Play ");
  //button1.style('background-color', col);
  //button1.position(300, 400);

  button4 = createButton("restart");

  // FRUIT IMAGES   :Rodjina
  rottenFruit = loadImage(
    "https://cdn.glitch.com/80434272-b62e-4f01-b6ac-df848161321c%2FrottenFruit.png?v=1628124919350"
  );
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

  // BACKGROUND IMAGES
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

  // CHARACTER/FRUIT COLLECTOR IMAGE (Mariam).
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

  // Jumping (Mariam).
  characterX = height - 250;
  characterY = 100;
  characterZ = 100;

  isJumping = false;
  jumpHeight = 50;
  jumpDirection = "UP";

  // end jumpig.
} // end setup
//fruit    : Rodjina
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
} // end Fruit    : Rodjina
// obstacles      : Nafisa/ Rodjina
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
} // end BadFruit/ obstacles

function draw() {
  
  //play sound on each level : Nafisa
  welcomeScreen.display1();
  if (lvl) {
    welcomeSound.play();
  } else {
    welcomeSound.stop();
  }
  if (lvl1) {
    level1Sound.play();
  } else {
    level1Sound.stop();
  }
  if (lvl2) {
    level2Sound.play();
  } else {
    level2Sound.stop();
  }
   if (finish) {
    gameOverSound.play();
  } else {
    gameOverSound.stop();
  }
  checkLost();

  button1.mousePressed(() => (pressed = true));
  button4.mousePressed(() => (restart = true));

  if (pressed) {
    lvl = false;
    lvl1 = true;
    // welcomeSound.stop();
    //level1Sound.play();
    level1.display2();
    button1.position(880, 880);

    // for (let i = 0; i < fruits.length; i++) {
    //   let fruit = fruits[i];
    //   fruit.move();
    //   fruit.display();
    // }
  }
  if (restart) {
    lvl = true; // current level 
    lvl1 = false;
    gameOverSound.stop();
    level1Sound.stop();
    level2Sound.stop();
    reStart();
    button4.position(8000, 800);
  }

  // Character movement (Mariam)
  fill(200, 80, 80);
  image(character, mouseX - 50, characterX, characterY, characterZ);
  // end of character movement.
  //proceed to next level  :Nafisa
  if (score >= 5) {
    //level1Sound.stop();
    nextLevel = true;
  }

  if (nextLevel) {
    //welcomeSound.stop()
    //level1Sound.stop();
    //score;
    lvl1 = false;
    lvl2 = true;
    this.fallSpeed = random(2, 3);
    level2.display3();
  }

  // Jumping Powerup   : Mariam
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
      // end of jumping powerup.
    }
  }
} // end draw
// levels display : Nafisa
class Level {
  constructor(bg) {
    //this.button = button;
    this.background = bg;
  }
  //welcome screen
  display1() {
    // welcomeSound.play();
    bg1 = background(bgImg1, height, width);

    textSize(70)
     textFont(fontBold);
    text("Catch The Fruit", 1/3*width, 1/2*height)
    button1.position(80, 540);
  }

  //level1
  display2() {
    //level1Sound.play();
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

  //level2
  display3() {
    ///level1Sound.stop();
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

  //game over
  gameOverDisplay() {
    //level2Sound.stop();
    button4.position(width / 2, 400);
    bg4 = background(bgImg4);

    fill(235, 64, 52);

    textAlign(CENTER);
    textSize(70);
    text("Game Over", width / 2, 350);
    textSize(30);
  }
}

// reset game   :Nafisa
function reStart() {

  //level1Sound.stop();
  // level2Sound.stop();
  button4.position(8000, 8000);
  setup();

  welcomeScreen.display1();
}

// character movement according to the mouse.

// end of charater movement

let welcomeScreen = new Level(bg1);
let level1 = new Level(bg2, lvl1);
let level2 = new Level(bg3, lvl2);
let gameOver = new Level(bg4);

// keep track of score and game over condition   : Nafisa/ Mariam
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

    // double points for jumping    : Nafisa/Mariam
    if (hit && !fruit.collected && !gameIsOver) {
      mySound.play();
      fruit.collected = true;
      score = score + 1;
      if (isJumping) {
        score = score + 1;
        jumpSound.play();
      }
      //console.log(score);
    }
  }

  // check obstacles collision
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
      rottenFruitSound.play();

      //console.log(score);
    }
  }
  if (lives <= 0 || score < 0) {
    gameIsOver = true;
  }
  if (gameIsOver) {
    lvl1 = false;
    lvl2 = false;
    finish = true;
    gameOver.gameOverDisplay();
  }
}

//keep track of losing points by clicking on obstacles or losing fruits  : Nafisa
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
      fallingSound.play();
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
      fallingSound.play();
    }
  }
}

// landmark for losing points  :Nafisa
function river() {
  fill(53, 195, 242);
  rect(0, height - 100, width, 100);
}
// function resetScore(){
//   score =0;
//   fallSpeed = random(1.5,2)

// }

// Use UP arrow to jump.  : Mariam

function keyPressed() {
  //console.log(keyCode);
  if (keyCode == UP_ARROW) {
    isJumping = true;
  }
}
