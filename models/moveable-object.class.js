class MoveableObject {
    x = 0;
    y = 65;
    img;
    height = 75;
    width = 50;
    imagesCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;



    /**
     * 
     * @returns Applays gravity to character
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    /**
     * 
     * @returns if the character in air is or not
     */
    isAboveGround() {
        return this.y < 140
    }

    loadImage(path) {
        this.img = new Image(); // (Iamge ist new from JS) same like document.getElementbyId('image')
        this.img.src = path;
    }

    /**
     * to load images from Json array
     * @param {Array} arr - ['img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png', 'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png'.......] 
     */
    loadImages(arr) {
        arr.forEach(path => { // path wird von oben genommen
            let img = new Image();
            img.src = path;
            this.imagesCache[path] = img;
        });
    }

    /**
     * 
     * @param {object} images - are the photos from all the WALKING_IMAGES Array so we can use only one function for all images, who's have to run
     * this function animate all the images into running form
     */
    playAnimation(images) {
        let i = this.currentImage % this.WALKING_IMAGES.length; // % modulo gibt die Rest werte an z.B wenn das i wert von 6 erreicht hat, wird von i von 0 anfangen.
        // z.B 0 % 6 = 0, 1 1/6 = 0,1 wenn 6/6 = 1 aber wenn 7/6 = 1 ,0
        let path = images[i]; // image Path
        this.img = this.imagesCache[path]; // img variable in moveable object
        this.currentImage++;
    }
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.playbackRate = 1.3;
    }
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }
}