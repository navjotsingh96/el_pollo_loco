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
    moveLeft() {
        // Diese Funktion beweget die Bilder in einem gewissen Intervall
        setInterval(() => {
                this.x -= this.speed;
            }, 1000 / 60) // <---- Hier wird die Intervalldauer eingegeben
    }
}