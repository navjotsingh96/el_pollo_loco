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
    ]
    world;
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.WALKING_PEPE);
        this.animate();

    }
    animate() {
        setInterval(() => {
                if (this.world.keyboard.RIGHT) {
                    this.x += this.speed;

                }
                if (this.world.keyboard.LEFT) {
                    this.x -= this.speed;

                }
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

    }
}