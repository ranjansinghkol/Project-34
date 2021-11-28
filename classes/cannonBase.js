class CannonBase {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        fill(160, 82, 45);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}