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
    level1 = getLevel1();
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
    /* for smartphone keys*/
function touchDownLeft() {
    keyborad.LEFT = true;
}

function touchUpLeft() {
    keyborad.LEFT = false;

}

function touchDownRight() {
    keyborad.RIGHT = true;
}

function touchUpRight() {
    keyborad.RIGHT = false;

}

function touchDownJump() {
    keyborad.UP = true;
}

function touchUpJump() {
    keyborad.UP = false;

}

function touchDownThrow() {
    keyborad.D = true;
}

function touchUpThrow() {
    keyborad.D = false;

}