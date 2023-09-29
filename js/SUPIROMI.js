class Supiromi{
    constructor(x, y, width, height, supiromiPos) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width
        this.height = height
        this.image = loadImage("./assets/boat.png")
        this.supiromiPosition = supiromiPos
        World.add(world, this.body)
    }

    VaiQuemQuer(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.supiromiPosition, this.width, this.height)
        pop()
    }
}