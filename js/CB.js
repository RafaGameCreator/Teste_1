class CB {
    constructor(x, y) {
        var opt = {
            isStatic: true
        };
        this.r = 70;
        this.body = Bodies.circle(x, y, this.r, opt);
        this.image = loadImage("./assets/CanonBall.png");
        this.image2 = loadImage("./assets/rick.png");
        this.trajectory = [];
        World.add(world, this.body);
    }

    display2() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
        if(this.body.velocity.x > 0 && pos.x > 10){
            var position = [pos.x, pos.y]
            this.trajectory.push(position)
        }
        for(var i = 0; i < this.trajectory.length; i++){
            image(this.image2, this.trajectory[i][0], this.trajectory[i][1], 15, 10)
        }
    }

    VAILOGUINHOSAOLONGUINHO() {
        var newAngle = cannon.angle - 28
        newAngle = newAngle * (3.14 / 180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, {x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14)})
    }
}