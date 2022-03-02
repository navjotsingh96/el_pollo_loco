class MoveableObject {
    x = 0;
    y = 65;
    img;
    height = 75;
    width = 50;



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