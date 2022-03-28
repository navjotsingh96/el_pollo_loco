class BossStatusBar extends DrawableObject {
    IMAGES_BOSS = [
        'img/7.Marcadores/Icono/Mesa de trabajo 130.png',
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
        this.loadImages(this.IMAGES_BOSS);
        this.x = 2250;
        this.y = 90;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
        console.log(this.x)
    }

    //setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOSS[this.resolveImageIndex()];
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
        } else if (this.percentage > 10) {
            return 1;
        } else {
            return 0;
        }
    }
}