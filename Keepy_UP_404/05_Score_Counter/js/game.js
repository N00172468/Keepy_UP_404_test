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
            gravity: {
                y: 900
            }
        }
    }
};

//Create New Game. Pass Config:
let game = new Phaser.Game(config);

//Variables:
//Score Counter:
var score = 0;
var scoreText;


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
    bg.setOrigin(0, 0);

    //Portray Ball with Physics:
    this.ball = this.physics.add.sprite(500 / 2, 200, 'ball').setInteractive();

    //Player Input:
    this.ball.on('pointerdown', function (pointer) {
        //When player hits ball, send ball upwards:
        this.setVelocityY(-400);
    });

    //Rotate Ball:
    this.ball.rotation = Math.PI / 4;
    this.ball.setRotation(Math.PI / 4);

    //Collide Ball with Border of Canvas:
    this.ball.setCollideWorldBounds(true);

    //Ball Bounce:
    this.ball.setBounce(1);

    //Ball Velocity:
    this.ball.setVelocity(150);
    
    //Score Counter:
    scoreText = this.add.text(16, 16, 'SCORE: 0', {
       fontSize: '24px', fill: '#ffff'
    });
};

//Update Function:
gameScene.update = function () {
    //Rotation of Ball:
    this.ball.angle += 3;
    
    //Score Counter:
    if (this.ball.y >= 0) {
        //this.ball.addEventListener('pointerdown')
        score ++;
        scoreText.setText('SCORE: ' + score);
        scoreText.y = 10;
    }
};

//Score Counter Event Listener:
this.ball.addEventListener("click", scoreCounter);

gameScene.scoreCounter = function () {
    score += 1;
}


