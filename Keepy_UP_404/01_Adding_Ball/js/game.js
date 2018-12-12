//New Game Scene:
let gameScene = new Phaser.Scene('Game');

//Config. of Game:
let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 281,
    scene: gameScene
};

//Preload Assets:
gameScene.preload = function () {
    //Load Images:
    this.load.image('background', 'assets/background.jpg');
    this.load.image('ball', 'assets/ball.png');
};

//Call Out Assets:
gameScene.create = function () {
    //Portray Background:
    let bg = this.add.sprite(0, 0, 'background');
    
    //Set Origin for Background:
    bg.setOrigin(0,0);
    
    //Portray Ball:
    let ball = this.add.sprite(500/2, 200, 'ball');
};

//Create New Game. Pass Config:
let game = new Phaser.Game(config);
