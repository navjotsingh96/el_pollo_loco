class ThrowableObject extends MoveableObject {
    BOTTEL_IMAGES = [
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png'
    ];
    BOTTEL_SPLASH = [
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 12.png'

    ]
    groundPos = 400;
    constructor(x, y, otherDirection) {
        super().loadImage('img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.BOTTEL_IMAGES);
        this.loadImages(this.BOTTEL_SPLASH);
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
            this.y < this.groundPos;
            if (this.y == 140) {
                this.playAnimation(this.BOTTEL_SPLASH);
            }
        }, 25);

        setInterval(() => {
            this.playAnimation(this.BOTTEL_IMAGES);

        }, 1000 / 60);
    }

}