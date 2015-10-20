var menuState = {
	create: function(){
		
		var nameLabel = game.add.text(80, 80, 'He forgot leg day: The Game', 
										{font: '50px Arial', fill: '#ffffff'});
										
	var startLabel = game.add.text(80, game.world.height-80, 'Press Enter to start', {font: '25px Arial', fill: '#ffffff'});
	
	var enterKey = game.input.keyboard.addkey(Phaser.keyboard.ENTER);
	
	enterKey.onDown.addOnce(this.start, this);
		
	},
	
	start: function(){
		
		game.state.start('play');
	},
	
}