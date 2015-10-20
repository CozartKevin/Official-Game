
function preload() {

    
var game = new Phaser.Game(640,480, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', bootState);
game.state.add('menu', bootState);
game.state.add('play', bootState);
game.state.add('win', bootState);

game.state.start('boot');


	
};

