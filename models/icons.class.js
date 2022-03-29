class Icons extends DrawableObject {
    IMAGE_ICON = [
        'img/7.Marcadores/Icono/Mesa de trabajo 130.png'
    ];
    y = 40;
    x = 2405;
    width = 40;
    height = 50;
    constructor() {
        super().loadImage(this.IMAGE_ICON);
    }
}