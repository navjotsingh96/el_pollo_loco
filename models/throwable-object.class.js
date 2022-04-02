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

    ];

    groundPos = 400;
    broken = false;
    clearSplash;
    bottelGravity;

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
        this.bottelSpeed();
        this.bottelAnimations();

    }
    bottelSpeed() {
        this.bottelGravity = setInterval(() => {
            if (!this.broken) {
                if (this.otherDirection) {
                    this.x += 15;
                } else {
                    this.x -= 15;
                }
            }
        }, 25);
    }

    bottelAnimations() {
        this.clearSplash = setInterval(() => {
            if (this.broken == true) {
                this.playAnimation(this.BOTTEL_SPLASH);
            } else if (!this.broken) {
                this.playAnimation(this.BOTTEL_IMAGES);
            }
        }, 200);
    }

    stopGravity() {
        super.stopGravity();
        this.broken = true;
        clearInterval(this.bottelGravity);
        setTimeout(() => {
            clearInterval(this.clearSplash);
        }, 800);
    }

}