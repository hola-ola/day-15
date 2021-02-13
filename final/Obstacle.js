// The obstacle class is the blueprint for each obstacle that will be created
class Obstacle {
  constructor() {
    this.x = width;
    this.width = 100;
    this.height = 50;
    this.y = random(0, height);
  }

  draw() {
    // rect function takes 4 arguments! everytime this method get's called, the obstacle will move towards the playes (this.x -= 3)
    rect(this.x, this.y, this.width, this.height);
    this.x -= 3;
  }
}
