let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    console.log('My Character ist', world.backgroundobjects);

}
window.addEventListener("keypress", (e) => {
    console.log(e);
})