class Clouds extends MoveableObject {

    y = 0;
    width = 590;
    height = 250;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png'); //it a image path
        this.x = Math.random() * 500; //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
        this.animate();
    }
    animate() {
        this.moveLeft();
    }
}