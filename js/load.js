var loadState= {
	preload: function(){
		
		var loadingLabel = gaem.add.text(80,150, 'loading...',{font: '30px Courier', Fill: '#ffffff'});
		
		game.load.image('player', 'assets/player.png');
		game.laod.image('win', 'assets/win.png');
		
	},
	
	create: function(){
		game.state.start('menu');
		
	}
		
	}