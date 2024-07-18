class Person {
  constructor() {
    this.x = width / 2; // Start at the center of the canvas
    this.y = height / 2;
    this.size = tileSize;
    this.maxSpeed = 4;
    this.acceleration = 0.5;
    this.deceleration = 0.9;
    this.velX = 0;
    this.velY = 0;
  }

  update() {

    if ()

      if (keyIsDown(LEFT_ARROW)) {
        this.velX -= this.acceleration;
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.velX += this.acceleration;
      } else {
        this.velX *= this.deceleration;
      }

    if (keyIsDown(UP_ARROW)) {
      this.velY -= this.acceleration;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.velY += this.acceleration;
    } else {
      this.velY *= this.deceleration;
    }

    this.velX = constrain(this.velX, -this.maxSpeed, this.maxSpeed);
    this.velY = constrain(this.velY, -this.maxSpeed, this.maxSpeed);

    if (this.velX < 0.001) this.velX = 0;
    if (this.velY < 0.001) this.velY = 0;
  }

  show() {
    fill(0, 0, 255);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}
