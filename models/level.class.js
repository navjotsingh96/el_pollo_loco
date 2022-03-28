class Level {
    enemies;
    clouds;
    backgroundobjects;
    coins;
    level_end_x = 2250;

    constructor(enemies, clouds, backgroundobjects, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.coins = coins;
    }
}