//  The Character is the class that holds all of the player's information
class Character {
  constructor() {
    // the player is always in the same area. the illusion of movement is done in the Background class
    this.x = 100;
    //  this.y = 210;
    //  Here, we are starting at 0, so that we can see the viking fall down already. To see the effect of the gravity and velocity
    this.y = 0;

    this.width = 40;
    this.height = 40;
    //  this gravity property is emulating the continuos force of gravity on the player
    this.gravity = 0.2;

    //  this velocity gravity is going to be representative of the speed at which the player will be pulled to the "floor"/ground
    this.velocity = 0;
    //  to the current background floor
    this.floor = 210;

    //  number of jumps the player has done
    this.jumpCounts = 0;
  }

  //   the jump method is going to make sure our character "jumps" in order to avoid obstacles, for example
  jump() {
    //  if (this.y <= 0 || this.jumpCounts === 2) { // removed the this.y becasue if the user wants to jump twice that high it should be allowed. just wont have to power to move away from an obstacle
    //   if the character has already jumped twice, we stop the player from jumping
    if (this.jumpCounts === 2) {
      console.log("HERE?");
      return;
    }

    //  add one jump to the count
    this.jumpCounts++;
    //  pulls the player up, to get a vertical like feel
    this.y -= 10;
    //  remove a value from the velocity so that it emulates the feeling of jumping with already some "force" pulling you down
    this.velocity -= 5;
  }

  draw() {
    //   everytime draw gets called , the velocity gets higher and higher to pull the player farther down
    this.velocity += this.gravity;
    //  we add a value of the velocity onto the player's vertical axis. to make sure that the player drops and is continuously dropping to the floor
    this.y += this.velocity;
    //  WE ARE ON THE FLOOR
    if (this.y > this.floor) {
      //  we make sure the player wont go father down than the floor
      this.y = this.floor;
      // we reset the jumpcounts
      this.jumpCounts = 0;
      // we reset the velocity to 0, because only gravity has a pull on the player, now no velocity should work
      this.velocity = 0;
    }
    //  DRAW CHARACTER
    image(character, this.x, this.y, this.width, this.height);
  }
}
