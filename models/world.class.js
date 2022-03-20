class World {

    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundobjects = level1.backgroundobjects;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // canvas definiert und für unten benutzt
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }
    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // to clear the canvas from the x sonst it makes duplicate
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.backgroundobjects);
        this.addObjectToMap(this.clouds);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);



        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1)
            mo.x = mo.x * -1;

        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); // this function help to reduce the code make clear to read
        // normaly will so written this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)
        if (mo.otherDirection) {
            this.ctx.restore();
            mo.x = mo.x * -1;

        }
    }
}