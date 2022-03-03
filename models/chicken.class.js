class Chicken extends MoveableObject {
    height = 100;
    width = 70;
    WALKING_CHICKEN = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G4.png'
    ];

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png');
        this.loadImages(this.WALKING_CHICKEN); //it a image path
        this.x = 300 + Math.random() * 500; //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
        this.y = 320;
        this.chickenAnimate();
        this.animate();
    }
    chickenAnimate() {
        setInterval(() => {

            this.x -= 0.6;
        }, 1000 / 60);
    }
    animate() {
        setInterval(() => {
            let i = this.currentImage % this.WALKING_CHICKEN.length;
            let path = this.WALKING_CHICKEN[i]; // image Path
            this.img = this.imagesCache[path]; // img variable in moveable object
            this.currentImage++;
        }, 150);
    }
}