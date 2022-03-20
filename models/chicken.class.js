class Chicken extends MoveableObject {
    height = 100;
    width = 70;
    WALKING_IMAGES = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G4.png'
    ];

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png');
        this.loadImages(this.WALKING_IMAGES); //it a image path
        this.x = 300 + Math.random() * 500; //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
        this.y = 320;
        this.animate();
        this.moveLeft();
        this.speed = 0.15 + Math.random() * 0.25;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES)
        }, 150);
    }

}