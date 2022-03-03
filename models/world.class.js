class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Clouds()
    ];
    backgroundobjects = [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; // canvas definiert und für unten benutzt
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); // to clear the canvas from the x sonst it makes duplicate
        this.addObjectToMap(this.backgroundobjects);
        this.addObjectToMap(this.clouds);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);


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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); // this function help to reduce the code make clear to read
        // normaly will so written this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)
    }
}