class Level {
    enemies;
    clouds;
    backgroundobjects;
    coins;
    bottels;
    level_end_x = 2250;

    constructor(enemies, clouds, backgroundobjects, coins, bottels) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.coins = coins;
        this.bottels = bottels;

    }
}