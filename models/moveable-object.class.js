class MoveableObject {
    x = 120;
    y = 400;
    img;
    width = 100;
    height = 150;


    loadImage(path) {
        this.image = new Image(); // (Iamge ist new from JS) same like document.getElementbyId('image')
        this.image.src = path;
    }
    moveRight() {
        console.log('moving right');
    }
    moveLeft() {

    }
}