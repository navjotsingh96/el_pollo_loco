class Endboss extends MoveableObject {

    height = 370;
    width = 250;
    y = 80;
    WALKING_IMAGES = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
    ];
    HURTING_IMAGES = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png',
    ]

    constructor() {
        super();
        this.loadImages(this.WALKING_IMAGES); //it a image path
        this.x = 2250;
        this.loadImages(this.HURTING_IMAGES);
        this.animate();

    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.WALKING_IMAGES)
            if (this.isHurt()) {
                this.playAnimation(this.HURTING_IMAGES);
            }
        }, 150);
    }
}