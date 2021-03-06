class MoveableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    energey = 100;
    lastHit = 0;
    bossEnergy = 100;
    gravityInterval;
    /**
     * @returns Applays gravity to character
     */
    applyGravity() {
        this.gravityInterval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }
    /**
     * stop interval of applyhravity because of bottels
     */
    stopGravity() {

        clearInterval(this.gravityInterval);
    }
    /**
     * 
     * @returns if the character in air is or not
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 140
        }
    }
        /**
         * @returns is Character. is colliding with chicken?
         */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    /**
     * if character hit enemy Energey will be down and last hit when the character was in touch of enemy
     */
    hit() {
        this.energey -= 5;
        if (this.energey < 0) {
            this.energey = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * if endboss were hited with bottel, Bossengery will be godown.
     */
    hitBoss() {
            this.bossEnergy -= 20;
            if (this.bossEnergy < 0) {
                this.bossEnergy = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
        /**
         * 
         * @returns ani. of hurt and duration is 500ms 
         */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // time in ms
        timepassed = timepassed / 1000; //time in sec    

        return timepassed < 0.5;
    }
    /**
     * @returns when energy is 0 of Character
     */
    isDead() {
        return this.energey == 0;
    }
    /**
     * @returns when energy is 0 of Endboss
     */
    isBossDead() {
        return this.bossEnergy == 0;
    }
    /**
     * @returns when character hit coin, then he collect coins
     */
    hitCoin() {
        this.coinsCount += 10;
        if (this.coinsCount > 100) {
            this.coinsCount = 100;
        }
    }
     /**
     * @returns when character hit Bottel, then he collect bottels 
     */
    hitBottel() {
            this.bottelCount += 20;
            if (this.bottelCount < 0) {
                this.bottelCount = 0;
            }
        }
        /**
         * @param {object} images - are the photos from all the WALKING_IMAGES Array so we can use only one function for all images, who's have to run
         * this function animate all the images into running form
         */
    playAnimation(images) {
        let i = this.currentImage % images.length; // % modulo gibt die Rest werte an z.B wenn das i wert von 6 erreicht hat, wird von i von 0 anfangen.
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
    jump() {
        this.speedY = 15;
    }

}