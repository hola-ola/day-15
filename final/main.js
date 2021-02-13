// loads the images and all necessary extra assets (we havent seen in class but you can also import music)
function preload() {
  console.log("PRELOAD");
  bgImage = loadImage("./assets/wide.jpg");
  character = loadImage("./assets/character-right.png");
}

// initialize the game
const game = new Game();

// setup calls all necessary functions in order for the canvas start working.
function setup() {
  // createCanvas is one of the most important functions in p5. its the one that actually creates the canvas element in the html, is the one that actually provides the rest of the code with a lot of other variables and functinos
  createCanvas(500, 300);

  //   Because createCanvas is the one responsible for making certain functions and variables available (for example, the *height* and *width* variables) and we;re using those variables to set up the background's height and width. we call this method in order to finally create those properties on the Background.
  //   Because we are using a Game class to hold all important information about our game - our players, our obstacles and our background is always part of the game, we simply call this game.setup() and leave the rest of the logic to the class itself
  game.setup();
}

// draw, by default, is called 60*/ second. There is a way to override this
function draw() {
  // clear - "cleans" up the canvas for everything that was there before
  clear();
  background("cyan");
  //   same explanation as above. the Game class is the one that holds all other aspects of the game. we call its *meta* method, and leave for the class all responsabilities of making sure our game actually works
  game.draw();
}
// function that p5 calls whenever **any** key gets called. You can use keyCode data in order to check which key was pressed
function keyPressed() {
  // to check the keyCode of the key you want to target, check here! -> https://keycode.info/
  // check if spacebar was pressed
  if (keyCode === 32) {
    //   call the Game's player jump method
    game.player.jump(10);
  }
}
