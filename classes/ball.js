class Ball {
    constructor(x, y, radius) {
        this.r = radius;
        
        var options = {
            isStatic: true
        };

        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    shoot() {
        var newAngle = cannon.angle - 28;
        newAngle = newAngle * (3.14 / 180);

        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);

        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180 / 3.14),
            y: velocity.y * (180 / 3.14)
        });
    }

    remove(index) {
        Matter.Body.setVelocity(this.body, {
            x: 0,
            y: 0
        });

        setTimeout(() => {
            World.remove(world, this.body);
            delete balls[index];
        }, 2);
    }

    display() {
        var pos = this.body.position;

        push();
        fill(0, 255, 0);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}