class DrawableObject {
    x = 0;
    y = 65;
    img;
    height = 75;
    width = 50;
    imagesCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image(); // (Iamge ist new from JS) same like document.getElementbyId('image')
        this.img.src = path;
    }

    /**
     * @returns  this function help to reduce the code make clear to read
     *normaly will so written this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)
     */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Helps to draw rectangels arounds objects(images) 
     * instanceof used only for specific objects that i want to show, apart of will not been shown
     */
    drawFrames(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Coins) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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



}