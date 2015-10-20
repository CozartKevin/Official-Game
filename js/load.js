var loadState= {
		preload: function(){
		
		var loadingLabel = game.add.text(80,150, 'loading...',{font: '30px Courier', fill: '#ffffff'});
	
		game.load.tilemap('tester', 'assets/ArtWork/Tiled_Map/test.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/ArtWork/Tiled_Map/phase-2.png' );
			game.load.spritesheet('player', 'assets/Full_Sheet.png', 64, 64);
		//game.load.image('player', 'assets/Full_Sheet.png');
		game.load.image('win', 'assets/Bullet.png');
		mysprite = this.game.add.sprite(40, 80, 'player');
		mysprite.frame = 15;
		
	var map;
	var layer;
		
	},
		
	create: function(){
		
		
		
		game.stage.backgroundColor = '#787878';
		
		map = game.add.tilemap('tester');
		map.addTilesetImage('phase-2', 'tiles');
		layer = map.createLayer('World1');
		layer.resizeWorld();
		
		game.state.start('menu');
		
	}
		
	}