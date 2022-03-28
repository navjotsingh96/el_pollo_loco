class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    coinBar = new Coinbar();
    statusBossBar = new BossStatusBar();
    throwableobjects = [new ThrowableObject()];
    /*   coins = new Coins(); */
    game_over = new Audio('audio/gameOver.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    dead_sound = new Audio('audio/chciken.mp3');

    //Endboss 
    endBoss = level1.enemies[level1.enemies.length - 1];
    chickens = level1.enemies[level1.enemies.length, 0, 3];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // canvas definiert und für unten benutzt
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
        this.checkCollisionsWithAll();
        console.log('this is enemys', this.chickens);

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
                /*  console.log(this.character.energey);
                 this.gameOver(); */

            }
        });
    }
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.hitCoin();
                //Sound
                this.coin_sound.play();
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);

            }
        });
    }
    takeBottels() {
        this.level.bottels.forEach((bottel) => {
            if (this.character.isColliding(bottel)) {
                this.character.hitBottel();
                this.level.bottels.splice(this.level.bottels.indexOf(bottel), 1);
                console.log(this.character.bottelCount)
            }
        })
    }

    /* 
        checkCollisionsChicken() {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.chicken.hitChicken();

                    console.log(this.enemy.energey);

                }
            });
        } */

    /*   checkCollisionsWithChicken() {
          this.level.enemies.forEach((enemy) => {
              if (this.character.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt() &&
                  !this.character.isDead() && this.character.isHurt()
              ) {
                  if (this.character.hit()) {
                      this.statusBar.setPercentage(this.character.energey);
                     console.log(this.character.energey);
                      this.gameOver();
                  }
              }
          });
      } */
    /*   checkCollisionsforChicken() {
          this.character.forEach((PEPE) => {
              if (this.chicken.isColliding(PEPE)) {
                  this.chicken.hitChicken();
                  this.statusBar.setPercentage(this.chicken.enemyEnergy);
                  console.log(this.chicken.enemyEnergy);

              }
          });
      } */

    checkThrowObject() {
        if (this.keyboard.D) {
            let bottel = new ThrowableObject(this.character.x + 100, this.character.y + 100, !this.character.otherDirection);
            this.throwableobjects.push(bottel);
            this.throw = -20;
        }
    }

    checkCollisionsWithBottel() {
            this.level.enemies.forEach((enemy) => {
                this.throwableobjects.forEach((bottel) => {

                    if (bottel.isColliding(enemy) && !enemy.isDead() && !enemy.isHurt()) {
                        enemy.hit();
                        this.deleteChicken(enemy);
                    }
                    if (bottel.isColliding(this.endBoss)) {
                        this.endBoss.hitBoss();
                        this.endBossHited();
                    }
                    if (this.endBoss.isBossDead()) {
                        this.endBossDead();
                    }

                });
            });
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
            }
        }
        /**
         * delete Boss from Array but wait because of dead animation.
         */
    endBossDead() {
        setTimeout(() => {
            this.level.enemies.splice(this.endBoss);
        }, 2000);
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // to clear the canvas from the x sonst it makes duplicate
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundobjects);


        this.ctx.translate(-this.camera_x, 0);
        // ----- Space for fixed Objects---
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addToMap(this.statusBossBar);
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

            setTimeout(() => {
                let canavs = document.getElementById('canvas');
                canavs.classList.add('d-none');
                document.getElementById('endScreen').classList.remove('d-none');
            }, 5000);
        }
    }
}