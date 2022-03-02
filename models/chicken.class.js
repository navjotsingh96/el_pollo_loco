class Chicken extends MoveableObject {

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/1.Caminata/G1.png'); //it a image path
        this.x = 100 + Math.random() * 500; //für random platzierung  math zahl gibt wert zwischen 0 und 1 und dann wird mit  500*
    }
}