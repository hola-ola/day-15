// Background is just a class, because its going to have its internal behaviours and it shouldnt be controlled by anything outside of itself.
// the Game **holds** the background, but its up to the background to behave according to the logic that you want it to do
// some examples of different logic here, would be to add other background images, different flows, different ways of looping (vertical, reversed, super fast, etc)
class Background {
  constructor() {
    // console.log("HERE");
    //  this.height = height;
    //  this.width = width;
    this.x = 0;
  }

  // the setup meta-method is called in the game.js in order to initialize the height and width properties of the Background object
  setup() {
    this.height = height;
    this.width = width;
  }

  draw() {
    // makes the background move to the left, creating the illusion of movement!
    this.x -= 3;

    // we draw the first image that appears in the game at launch
    image(bgImage, this.x, 0, this.width, this.height);
    // we draw another image to the right of the previous one, to create the loop effect whenever it moves left
    image(bgImage, this.x + this.width, 0, this.width, this.height);

    //  Because we are always subtracting from the x (and we start at 0) we know that whenever it reaches -width it actually already subtracted the WHOLE image.
    // Therefore, we update the x position back to 0, to give the continuing loop a reset
    if (this.x <= -this.width) {
      // reset the background back to its starting point, to give the illusion of never ending loop
      this.x = 0;
    }
    //  Another way of writing this check this
    // so if the right hand side of the first background image is at position 0, we should reset it back to its original spot
    // if (this.x + this.width <= 0) {
    // this.x = 0
    // }
  }
}
