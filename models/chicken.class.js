class Chicken extends MoveableObject {
    height = 100;
    width = 70;
    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png'); //it a image path
        this.x = 200 + Math.random() * 500; //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
        this.y = 320;
        this.chickenAnimate();
    }
    chickenAnimate() {
        setInterval(() => {
            this.x -= 0.5;
        }, 1000 / 60);
    }
}