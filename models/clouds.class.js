class Clouds extends MoveableObject {
    x = 0 + Math.random() * 400;
    y = 0;
    width = 250;
    height = 100;
    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png'); //it a image path
        //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
    }
}