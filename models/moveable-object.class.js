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
    moveRight() {
        console.log('moving right');
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 100);
    }
}