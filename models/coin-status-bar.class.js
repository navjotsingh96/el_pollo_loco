class Coinbar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador-vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/100_.png'
    ];
    x = 100;
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 100;
        this.y = 100;
        this.width = 200;
        this.height = 300;
    }
}