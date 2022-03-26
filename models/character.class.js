class Character extends MoveableObject {
    y = 30;
    height = 300;
    width = 170;
    speed = 7;
    WALKING_IMAGES = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png'

    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png'
    ];
    IMAGES_BOARING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-10.png',
    ]
    IMAGES_SLEEPING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-20.png'
    ];
    world;
    lastMove = new Date().getTime();
    walking_sound = new Audio('audio/running.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');
    hurting_sound = new Audio('audio/ouch.mp3');
    bgr_music = new Audio('audio/gameSound.mp3');
    sleep_sound = new Audio('audio/sleeping.mp3');
    playInterval = 100;


    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.WALKING_IMAGES);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_BOARING);
        this.animate();
        this.applyGravity();


    }
    animate() {
        setInterval(() => {
                this.characterMoving();
            },
            1000 / 60);
        // Helps to show to picture of pepe running

        setInterval(() => {
            this.animationPlay();
        }, this.playInterval);
    }

    characterMoving() {
        this.walking_sound.pause();
        /*    this.bgr_music.play();
           this.sleep_sound.pause();
           this.bgr_music.volume = 0.2; */
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.walking_sound.play();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.walking_sound.play();
        }

        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.jump();
            this.jumping_sound.play();

        }
        if (this.world.keyboard.M) {
            this.bgr_music.pause();
        }
        this.world.camera_x = -this.x + 80;
    }


    animationPlay() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);

        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.hurting_sound.volume = 0.1;
            /* this.hurting_sound.play(); */
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.WALKING_IMAGES);


        } else if (this.isAboveGround()) {
            this.playInterval = 200;
            this.playAnimation(this.IMAGES_JUMPING);


        } else {
            this.sleepingCharacter();
        }
    }
    sleepingCharacter() {
        this.firstMove = new Date().getTime() - this.lastMove;
        if (this.firstMove > 2000) {
            this.playAnimation(this.IMAGES_BOARING);
        }
        /*   if (this.firstMove > 5000) {
              this.playAnimation(this.IMAGES_SLEEPING);
               this.sleep_sound.play();
          } */
    }

}