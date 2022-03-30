let canvas;
let world;
let keyborad = new Keyboard();
var canvasW = 640;
var canvasH = 480;

function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('btn-cont').classList.add('d-none');
    init();
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyborad);
}

function restartGame() {
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('restartBtn').classList.add('d-none');
    document.getElementById('winScreen').classList.add('d-none');
    init();
}

function fullscreen() {
    canvas.requestFullscreen();
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
    if (e.keyCode == 68) {
        keyborad.D = true;
    }
    if (e.keyCode == 77) {
        if (keyborad.M == true) {
            keyborad.M = false;
        } else
            keyborad.M = true;
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
    if (e.keyCode == 68) {
        keyborad.D = false;
    }

})