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
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png'
    ];
    DEAD_IMAGES = [
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png',
    ];
    //Audio
    hurting_audio = new Audio('audio/chickenDead.mp3');
    chicken_dead = new Audio('audio/chciken.mp3');

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png');
        this.loadImages(this.WALKING_IMAGES); //it a image path
        this.x = 2250;
        this.loadImages(this.HURTING_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.animate();
    }
    /**
     * play differnt images when boss collided with bottel or if he/she is dead
     */
    animate() {
        this.hurting_audio.pause();
        this.chicken_dead.pause();

        setInterval(() => {
            this.hurting_audio.pause();
            this.chicken_dead.pause();
            if (this.isHurt()) {
                this.playAnimation(this.HURTING_IMAGES);
                this.hurting_audio.play();

            } else if (this.isBossDead()) {
                this.playAnimation(this.DEAD_IMAGES);

            } else {
                this.playAnimation(this.WALKING_IMAGES);
            }

        }, 150);
    }
}