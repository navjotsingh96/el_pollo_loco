class Coins extends DrawableObject {
    x = 150;
    y = 300;
    width = 150;
    height = 150;

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda2.png');
        this.x = x;
        this.y = y;

    }
}