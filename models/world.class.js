class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    coinBar = new Coinbar();
    bottelBar = new BottelBar();
    statusBossBar = new BossStatusBar();
    icon = new Icons();
    throwableobjects = [new ThrowableObject()];
    gravityInterval;

    //Audios
    game_over = new Audio('audio/gameOver.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    dead_sound = new Audio('audio/chciken.mp3');
    bgr_music = new Audio('audio/backgroundmusic.mp3');
    you_win = new Audio('audio/onloadMusic.mp3');
    chicken_dead = new Audio('audio/chciken.mp3');
    dead_audio = new Audio('audio/chickenDead.mp3');


    //Endboss 
    endBoss = level1.enemies[level1.enemies.length - 1];



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // canvas definiert und für unten benutzt
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
        this.checkCollisionsWithAll();
        /* this.playBgrMusic(); */
        console.log(this.keyboard);
    }


    playBgrMusic() {
        this.bgr_music.play();
        this.bgr_music.volume = 0.1;
        if (this.keyboard.M == true) {
            this.bgr_music.pause();
        }

    }

    setWorld() {
        this.character.world = this;
    }
    checkCollisionsWithAll() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
            this.checkCollisionsWithBottel();
            this.takeBottels();
            this.gameOver();
        }, 50);
        setInterval(() => {
            this.checkCollisionWithCoins();
        }, 0.5);
    }
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energey);

            }
        });
    }
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.hitCoin();
                this.coinBar.setPercentage(this.character.coinsCount);
                this.coin_sound.play();
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
            }
        });
    }
    takeBottels() {
        this.level.bottels.forEach((bottel) => {
            if (this.character.isColliding(bottel)) {
                this.character.hitBottel();
                new Audio('audio/bottelTake.mp3').play();
                this.bottelBar.setPercentage(this.character.bottelCount);
                this.level.bottels.splice(this.level.bottels.indexOf(bottel), 1);
            }
        })
    }

    checkThrowObject() {
        if (this.keyboard.D && this.character.bottelCount > 0) {
            let bottel = new ThrowableObject(this.character.x + 100, this.character.y + 100, !this.character.otherDirection);
            this.throwableobjects.push(bottel);
            this.character.bottelCount -= 10;
            this.bottelBar.setPercentage(this.character.bottelCount);
        }
    }

    checkCollisionsWithBottel() {
            this.level.enemies.forEach((enemy) => {
                this.throwableobjects.forEach((bottel) => {

                    if (bottel.isColliding(enemy) && !enemy.isHurt()) {
                        enemy.hit();
                        bottel.stopGravity();
                        this.deleteBottelAfterCollison(bottel);
                        /*  bottel.clearBotttelInterval(); */

                        if (enemy.isDead()) {
                            this.dead_audio.play();
                            this.deleteChicken(enemy);
                        }
                    }
                    if (bottel.isColliding(this.endBoss)) {
                        this.endBoss.hitBoss();
                        this.deleteBottelAfterCollison(bottel);

                        this.endBossHited();
                    }
                    if (this.endBoss.isBossDead()) {
                        this.endBossDead();
                    }

                });
            });
        }
        deleteBottelAfterCollison(bottel){
            setTimeout(() => {
                this.throwableobjects.splice(this.throwableobjects.indexOf(bottel), 1);
            }, 400);
        }
        /**
         * delete chicken from Array but wait because of dead animation.
         */
    deleteChicken(enemy) {
            /*  this.dead_sound.play(); */
            setTimeout(() => {
                this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1);

            }, 400);
        }
        /**
         * Endboss changes the postion and go back again to his postion
         */
    endBossHited() {
            this.endBoss.x = this.endBoss.x - Math.random() * 500;
            setTimeout(() => {
                this.endBoss.x = 2250;
            }, 500);
            this.statusBossBar.setPercentage(this.endBoss.bossEnergy);
            if (this.endBoss.bossEnergy == 0) {
                this.endBoss.x = 2250;
                this.youWin();
            }
        }
        /**
         * delete Boss from Array but wait because of dead animation.
         */
    endBossDead() {
        this.chicken_dead.play();
        setTimeout(() => {
            this.level.enemies.splice(this.endBoss);
        }, 2000);
    }
    pauseMusic() {
        if (keyboard.M) {
            this.bgr_music.pause();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // to clear the canvas from the x sonst it makes duplicate
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundobjects);


        this.ctx.translate(-this.camera_x, 0);
        // ----- Space for fixed Objects---
        this.addToMap(this.statusBar);
        this.addToMap(this.bottelBar);
        this.addToMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);
        // ----- Space for fixed Objects Till here---

        this.addToMap(this.character);
        this.addToMap(this.statusBossBar);
        this.addToMap(this.icon);
        /* this.addToMap(this.coinBar); */

        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottels);
        this.addObjectToMap(this.throwableobjects);




        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * 
     * @param {images/object} objects or images from level-class 
     */
    addObjectToMap(objects) {
        // from ___this- this.backgroundobjects.forEach(object => {
        //this.addToMap(object);
        //to this
        objects.forEach(o => { // forEach methode für clouds für alle New Chicken elemneten 
            this.addToMap(o)

        });
    }


    addToMap(mo) {
            if (mo.otherDirection) {
                this.flipImage(mo);
            }
            mo.draw(this.ctx); // this function help to reduce the code make clear to read
            // normaly will so written this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)
            mo.drawFrames(this.ctx);
            if (mo.otherDirection) {
                this.flipImageBack(mo);
            }
        }
        /**
         * @returns flips the Character(images) to left if user press left key
         */

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }

    /**
     * @returns flips the Character(images) to normal or right if user press right key
     */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
    gameOver() {
        if (this.character.energey == 0) {
            this.game_over.play();
            this.bgr_music.pause();
            this.keyboard = false;

            setTimeout(() => {
                document.getElementById('endScreen').classList.remove('d-none');
                document.getElementById('restartBtn').classList.remove('d-none');

            }, 1050);
        }
    }
    youWin() {
        if (this.endBoss.bossEnergy == 0) {
            this.bgr_music.pause();
            this.keyboard = false;
            setTimeout(() => {
                document.getElementById('winScreen').classList.remove('d-none');
                document.getElementById('restartBtn').classList.remove('d-none');
                this.you_win.play();
            }, 1050);

        }
    }
}