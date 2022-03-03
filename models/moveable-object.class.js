class MoveableObject {
    x = 0;
    y = 90;
    img;
    height = 375;
    width = 200;



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