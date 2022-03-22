class StatusBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador-vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador-vida/verde/100_.png'
    ];
    percentage = 100;

    constructor() {
        super();
        this.loadImage(this.IMAGES);
        this.x = 100;
        this.y = 100;
        this.setPercentage(100);
    }

    //setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imagesCache[path];

    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}