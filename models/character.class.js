class Character extends MoveableObject {
    y = 130;
    height = 300;
    width = 170;
    speed = 4;
    WALKING_PEPE = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];
    JUMPING_PEPE = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png'
    ];
    world;
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.WALKING_PEPE);
        this.loadImages(this.JUMPING_PEPE);
        this.animate();
        this.jump();

    }
    animate() {
        setInterval(() => {
                if (this.world.keyboard.RIGHT) {
                    this.x += this.speed;
                    this.otherDirection = false;


                }
                if (this.world.keyboard.LEFT) {
                    this.x -= this.speed;
                    this.otherDirection = true;

                }

                this.world.camera_x = -this.x;

            },

            1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {


                let i = this.currentImage % this.WALKING_PEPE.length; // % modulo gibt die Rest werte an z.B wenn das i wert von 6 erreicht hat, wird von i von 0 anfangen.
                // z.B 0 % 6 = 0, 1 1/6 = 0,1 wenn 6/6 = 1 aber wenn 7/6 = 1 ,0
                let path = this.WALKING_PEPE[i];
                this.img = this.imagesCache[path];
                this.currentImage++;

            }

        }, 60);
    }

    jump() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.y = 20;
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.world.keyboard.SPACE) {


                let i = this.currentImage % this.JUMPING_PEPE.length; // % modulo gibt die Rest werte an z.B wenn das i wert von 6 erreicht hat, wird von i von 0 anfangen.
                // z.B 0 % 6 = 0, 1 1/6 = 0,1 wenn 6/6 = 1 aber wenn 7/6 = 1 ,0
                let path = this.JUMPING_PEPE[i];
                this.img = this.imagesCache[path];
                this.currentImage++;

            }
        }, 100);
    }
}