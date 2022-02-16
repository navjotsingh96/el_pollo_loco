class MoveableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;



    loadImage(path) {
        this.img = new Image(); // (Iamge ist new from JS) same like document.getElementbyId('image')
        this.img.src = path;
    }
    moveRight() {
        console.log('moving right');
    }
    moveLeft() {

    }
}