class ThrowableObject extends MoveableObject {
    BOTTEL_IMAGES = [
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x, y, otherDirection) {
        super().loadImage('img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.BOTTEL_IMAGES);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.throw();
        this.otherDirection = otherDirection;

    }
    throw () {
        this.speedY = 5;
        this.applyGravity();
        setInterval(() => {
            if (this.otherDirection) {
                this.x += 15;
            } else {
                this.x -= 15;
            }
        }, 25);

        setInterval(() => {
            this.playAnimation(this.BOTTEL_IMAGES);

        }, 1000 / 60);
    }

}