let tier = 0;  // Tier of Egg (0: Legendary, 1: Rare, 2: Epic, 3: Common)
let gachaType = 0;  // Gacha type of eggs: (0: Shiny, 1: Legendary, 2: Move)
let hatchWaves = 0;  // Hatch eggs after this amount of time.

Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys.battle.gameData.eggs.forEach(
    o => {
        o.tier = tier;
        o.gachaType = gachaType;
        o.hatchWaves = hatchWaves;
    }
);
