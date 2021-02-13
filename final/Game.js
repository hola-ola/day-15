//  Game class is important. It hold all the relevant data. Nothing happens without a game "logically".
// Game is the single source of information for the status of the game. If somehthing happens to a player, the game is aware
class Game {
  constructor() {
    //   the player is part of the game
    this.player = new Character();
    //  the background is also part of the game. everything will be relevant in the game
    this.background = new Background();
    // creating an obstacles array so we can populate it later
    this.obstacles = [];
  }

  setup() {
    //   as stated in the main.js: this `meta` method is responsible for setting up anything that still needs to be done. in this case, we defined a setup method in the Background class in order to have access to the variables that p5 *only* gives us access to, whenever the createCanvas has been called - in the setup function
    this.background.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();

    if (frameCount % 120 === 0) {
      // every 2 seconds, push a new obstacle to the obstacles array
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      // everytime the obstacle goes off canvas, remove it from the array
      if (obstacle.x + obstacle.width <= 0) {
        this.obstacles.splice(index, 1);
      }

      // in this case we are checking that whenever an obstacle is coliding with the player
      if (this.colisionCheck(obstacle, this.player)) {
        console.log("OOOOOH");
        //   tells p5 to stop calling the draw function
        noLoop();
      }
    });
  }

  colisionCheck(obstacle, player) {
    //   player.left + player.width (players.rightSide)
    //  if player's right side is to the left of the obstacle's left
    if (player.x + player.width < obstacle.x) {
      return false;
    }

    //  obstacle's left and obstacle width (obstacle.rightSide)
    // if obstacle's right side is to the left of player's left
    if (obstacle.x + obstacle.width < player.x) {
      return false;
    }

    // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    // player top side is below obstacle's bottom side
    if (player.y > obstacle.y + obstacle.height) {
      return false;
    }

    //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //  obstacle top side is below the player's bottom side
    if (obstacle.y > player.y + player.height) {
      return false;
    }
    return true;
  }
}
