var menuState = {
	create: function(){
		
		var nameLabel = game.add.text(35, 80, 'He forgot leg day: The Game', 
										{font: '45px Arial', fill: '#ffffff'});
										
	var startLabel = game.add.text(220, game.world.height-220, 'Press Enter to start', {font: '25px Arial', fill: '#ffffff'});
	
	var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	
	enterKey.onDown.addOnce(this.start, this);
		
	},
	
	start: function(){
		
		game.state.start('play');
	},
	
}