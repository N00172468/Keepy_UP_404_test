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
            debug: false,
            gravity: {
                y: 900
            }
        }
    },
        audio: {
            disableWebAudio: true
        }
};

//Create New Game. Pass Config:
let game = new Phaser.Game(config);

//Variables:
//Score Counter:
var score = 0;
var scoreText;

//Audio (Music):
var music;

//Preload Assets:
gameScene.preload = function () {
    //Load Images:
    this.load.image('background', 'assets/background.jpg');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('restartbtn', 'assets/restartbtn.png');

    //Load Audio (Music):
//    //Dave - No Words:
//    this.load.audio('gameAudio1', 'assets/Dave_No_Words.mp3');

    //Mall Grab - Feel Good House:
    this.load.audio('gameAudio2', 'assets/Mall_Grab_Feel_Good_House.mp3');

//    //ScHoolboy Q - Hell of a Night:
//    this.load.audio('gameAudio3', 'assets/ScHoolboy_Q_Hell_Of_A_Night.mp3');
};

//Create Game Scene:
gameScene.create = function () {
    //Portray Background:
    let bg = this.add.sprite(0, 0, 'background');

    //Set Origin for Background:
    bg.setOrigin(0, 0);

    //Portray Ball with Physics:
    this.ball = this.physics.add.sprite(500 / 2, 0, 'ball').setInteractive();

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
        fontSize: '24px',
        fill: '#ffff'
    });

    //Audio:
    music = this.sound.add('gameAudio2');
    music.play({
        loop: true
    });
};

//Update Function:
gameScene.update = function () {
    //Rotation of Ball:
    this.ball.angle += 3;

    //Score Counter:
    if (this.ball.y <= 281) {
        score++;
        scoreText.setText('SCORE: ' + score);
        scoreText.y = 10;

    }

    //Game Over:
    if (this.ball.y == 258) {
        this.gameOver();
    }
};

//Restart Function:
gameScene.gameOver = function () {
    score = 0;
    this.ball.destroy();
    this.restartbtn = this.add.sprite(500 / 2, 281 / 2, 'restartbtn').setInteractive();
    this.restartbtn.on('pointerdown', function (pointer) {
        this.scene.restart();
    }, this);
};
