let canvas;
let world;
let keyborad = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyborad);


}
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 38) {
        keyborad.UP = true;
    }
    if (e.keyCode == 40) {
        keyborad.DOWN = true;
    }
    if (e.keyCode == 37) {
        keyborad.LEFT = true;
    }
    if (e.keyCode == 39) {
        keyborad.RIGHT = true;
    }
    if (e.keyCode == 32) {
        keyborad.SPACE = true;
    }

})
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 38) {
        keyborad.UP = false;
    }
    if (e.keyCode == 40) {
        keyborad.DOWN = false;
    }
    if (e.keyCode == 37) {
        keyborad.LEFT = false;
    }
    if (e.keyCode == 39) {
        keyborad.RIGHT = false;
    }
    if (e.keyCode == 32) {
        keyborad.SPACE = false;
    }

})