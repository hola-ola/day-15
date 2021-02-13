// AN instance that will hold all the information of our game
const game = new Game();

// Here we load all our extra assets
function preload() {
    bgImage = loadImage("./assets/wide.jpg");
    theDude = loadImage("./assets/character-right.png")
}

// Gets called 60 times a second
function draw() {
    game.draw();
}

// Sets our canvas
function setup() {
    createCanvas(WIDTH, HEIGHT)
}

// Checks for whenever we press the key
function keyPressed() {
    game.keyPressed();
}
