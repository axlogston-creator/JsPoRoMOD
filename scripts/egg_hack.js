let tier = 3;  // Tier of Egg (3: Common, 2: Rare, 1: Epic, 1: Legendary)
let gachaType = 3;  // Gacha type of eggs: (0: Move, 1: Legendary, 2: Shiny)
let hatchWaves = 3;  // Hatch eggs after this amount of time.

Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys.battle.gameData.eggs.forEach(
    o => {
        o.tier = tier;
        o.gachaType = gachaType;
        o.hatchWaves = hatchWaves;
    }
);
