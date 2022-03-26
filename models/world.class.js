class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    throwableobjects = [new ThrowableObject()];
    game_over = new Audio('audio/gameOver.mp3');

    //Endboss 
    endBoss = level1.enemies[level1.enemies.length - 1]

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // canvas definiert und für unten benutzt
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
        this.run();
        console.log('this is endboss', this.endBoss);

    }

    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
            this.checkCollisionsWithBottel();

        }, 50);
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
                    console.log('is hited');
                    setTimeout(() => {

                    }, 300);
                    this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1);
                }
                if (bottel.isColliding(this.endBoss)) {
                    console.log('end boss hited');
                    this.endBoss.hitBoss();
                    this.statusBar.setPercentage(this.endBoss.bossEnergy);
                    console.log(this.endBoss.bossEnergy);
                }

            });
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // to clear the canvas from the x sonst it makes duplicate
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundobjects);


        this.ctx.translate(-this.camera_x, 0);
        // ----- Space for firxed Objects---
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);

        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
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