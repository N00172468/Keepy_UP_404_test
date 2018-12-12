//New Game Scene:
let gameScene = new Phaser.Scene('Game');

//Config. of Game:
let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 281,
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 100 }
        }
    }
};

//Create New Game. Pass Config:
let game = new Phaser.Game(config);

//Preload Assets:
gameScene.preload = function () {
    //Load Images:
    this.load.image('background', 'assets/background.jpg');
    this.load.image('ball', 'assets/ball.png');
};

//Create Game Scene:
gameScene.create = function () {
    //Portray Background:
    let bg = this.add.sprite(0, 0, 'background');
    
    //Set Origin for Background:
    bg.setOrigin(0,0);
    
    //Portray Ball with Physics:
    this.ball = this.physics.add.sprite(500/2, 200, 'ball');
    
    //Rotate Ball:
    this.ball.rotation = Math.PI / 4;
    this.ball.setRotation(Math.PI / 4);
    
    //Collide Ball with Border of Canvas:
    this.ball.setCollideWorldBounds(true);
    
    //Ball Bounce:
    this.ball.setBounce(1);
    
    //Ball Velocity (Test for Physics of Ball):
    this.ball.setVelocity(150);
};

//Update Function:
gameScene.update = function() {
    //Rotation of Ball:
    this.ball.angle += 3;
}

