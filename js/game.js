let canvas;
let world;
let keyborad = new Keyboard();

/**
 * start screen image, play button
 */
function startGame() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('btn-cont').classList.add('d-none');
    document.getElementById('smartphone').classList.remove('d-none');
    init();
}

function init() {
    canvas = document.getElementById('canvas');
    level1 = getLevel1();
    world = new World(canvas, keyborad);
}

function fullscreen() {
    canvas.requestFullscreen();
}
/**
 * keyboard kyes if user prees key e.g. arrowup than UP sets to true 
 */
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
/**
 * keyboard kyes if key is no more pressed e.g Arrowup if user press that key then UP sets to true 
 * but after when user that key no more pressed UP sets to false.  
 */
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
        if (e.keyCode == 77) {
            keyborad.M = false;
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