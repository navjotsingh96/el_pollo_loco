class BackgroundObject extends MoveableObject {
    width = 720;
    height = 150;
    constructor(x, y) {
        super().loadImage('img/5.Fondo/Capas/3.Fondo3/1.png');
        this.x = x;
        this.y = y;
    }
}