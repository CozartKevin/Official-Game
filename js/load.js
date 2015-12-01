	
var loadState= {
	
		preload: function(){
					
		var loadingLabel = game.add.text(80,150, 'loading...',{font: '30px Courier', fill: '#ffffff'});
	
		game.load.tilemap('Game2', 'assets/ArtWork/TiledMap/Game2.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/ArtWork/TiledMap/phase-2.png');
		game.load.image('backGround' , 'assets/ArtWork/TiledMap/side_scrolling_platformer_bg_art_by_nrvrl-d8ov5ek.png');
		game.load.spritesheet('player', 'assets/Full_Sheet.png', 64, 64);
		//game.load.image('player', 'assets/Full_Sheet.png');
		game.load.image('win', 'assets/Bullet.png');
		//mysprite = this.game.add.sprite(64, 64, 'player');
		//mysprite.frame = 50;
		game.load.image('bullet', 'assets/bullet.png');
		game.load.spritesheet('enemy', 'assets/Chicken_Sheet.png', 32, 32);
		
		
	},

	create: function(){
	
		
		
			
		game.state.start('menu');
		
	}
		
	}