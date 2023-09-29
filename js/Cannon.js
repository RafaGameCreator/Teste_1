class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_img = loadImage("./assets/canon.png");
    this.cannomb_img = loadImage("./assets/cannonBase.png");

  }
  display() {
    console.log(this.angle)
    if(keyIsDown(83) && this.angle < 70){
      this.angle += 1
    }
    if(keyIsDown(87) && this.angle > -130){
      this.angle -= 1
    }
    push();
    translate(this.x, this.y);
    rotate(this.angle)
    // rectMode(CENTER);
    // rect(this.x, this.y, this.width, this.height);
    imageMode(CENTER);
    image(this.cannon_img, 0, 0, this.width, this.height)
    pop();
    // rect(70, 20, 200, 200);
    image(this.cannomb_img, 70, 20, 200, 200)
    noFill()
  }
}
