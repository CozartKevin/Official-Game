


    
var game = new Phaser.Game(800,600, Phaser.AUTO, 'Leg Day');
var map;
var layer;
var backGround;
var scrollPos = 0.0;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

game.state.start('boot');


	


