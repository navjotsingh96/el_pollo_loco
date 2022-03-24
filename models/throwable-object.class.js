class ThrowableObject extends MoveableObject {

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.throw();

    }
    throw () {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 15;
        }, 25);
    }
}