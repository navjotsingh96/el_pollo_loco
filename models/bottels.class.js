class Bottels extends MoveableObject {
    IMAGES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];

    height = 100;
    width = 100;
    x = 1000;

    constructor(x, y) {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png', x, y);
        this.x = x;
        this.y = y;
        ;
    }
}