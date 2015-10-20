var winState = {
	create: function(){
		
		var winLabel = game.add.text(80, 80, 'You Win!',
		{font: '25px Arial', fill: '#ffffff'});
		
		var startLabel = game.add.text(80, game.world.height-80,'Press Enter to restart',
		{font: '25px Arial', fill: '#ffffff'});
		
		var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		
		enterKey.onDown.addOnce(this.restart, this);
		
	},
	
	restart: function(){
		game.state.start('menu');
	}
}