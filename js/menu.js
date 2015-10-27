var menuState = {
	create: function(){
		
		game.stage.backgroundColor = '#787878';
		
		map = game.add.tilemap('Game2');
		map.addTilesetImage('phase-2', 'tiles');
		backGround = game.add.sprite(0,0, 'backGround')
		backGround.scale.y = 1.5;
		backGround.sendToBack();
		
		layer = map.createLayer('World1');
		layer.resizeWorld();
		
		var nameLabel = game.add.text(35, 80, 'He forgot leg day: The Game', 
										{font: '45px Arial', fill: '#ffffff'});
										
	var startLabel = game.add.text(220, game.world.height-220, 'Press Enter to start', {font: '25px Arial', fill: '#ffffff'});
	
	var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	
	enterKey.onDown.addOnce(this.start, this);
		
	},
	
	start: function(){
		
		game.state.start('play',false);
	},
	
}