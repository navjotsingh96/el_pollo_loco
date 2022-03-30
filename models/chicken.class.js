class Chicken extends MoveableObject {
    height = 100;
    width = 70;
    WALKING_IMAGES = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G4.png'
    ];

    HURTING_IMAGES = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png',
    ]
    energey = 5;

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png');
        this.loadImages(this.WALKING_IMAGES); //it a image path
        this.loadImages(this.HURTING_IMAGES);
        this.x = 500 + Math.random() * 500; //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
        this.y = 320;
        this.animate();
        this.moveLeft();
        this.speed = 0.15 + Math.random() * 0.25;
        this.energey = this.energey;

    }

    animate() {

            setInterval(() => {
                this.moveLeft();
                this.otherDirection = false;
            }, 1000 / 60);

            setInterval(() => {
                this.playAnimation(this.WALKING_IMAGES);
                this.chickenHurt();
            }, 150);

        }
        // If chicken hurts then play animation
    chickenHurt() {

        if (this.isDead()) {
            this.playAnimation(this.HURTING_IMAGES);
        }

    }
}