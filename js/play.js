var playState = {
create: function(){
	
	
	
	
		
		
	this.keyboard = game.input.keyboard;
	this.player = game.add.sprite(200,475, 'player');
	this.player.animations.add('player_idle_right', [9,10,11,12,13],3,false);
	this.player.animations.add('player_idle_left', [0,1,2,3,4],3, false);
	this.player.animations.add('player_run_right', [63,64,65,66,67,68,69,70], 10, true)
	this.player.animations.add('player_run_left' , [55,56,57,58,59,60,61,62], 10, true)
	this.player.animations.add('player_jump_right', [])
	this.directionFacing = 'right';
	game.physics.arcade.gravity.y = 250;
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	//game.physics.arcade.enableBody(this.player, Phaser.Physics.ARCADE);
	//this.player.body.collide = true;
	//this.player.body.bounce.y = 0.8;
	//this.player.body.allowGravity = true;
	 // game.camera.follow(backGround);
	this.win = game.add.sprite(256, 256, 'win');
	game.physics.enable(this.win, Phaser.Physics.ARCADE);

	//this.player.boundsPadding = -10;
},
update: function(){
	game.physics.arcade.collide(this.player, layer);
	
	scrollPos = scrollPos + 0.25;
	 game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);
	backGround.position.x = (scrollPos);
	game.camera.x = scrollPos;
  
	backGround.tilePosition.x = (scrollPos * -0.25);
	
	
	if(this.keyboard.isDown(Phaser.Keyboard.A)){
		 this.player.animations.play('player_run_left');
		 this.player.body.velocity.x = -175;
		this.directionFacing = 'left';
	 		 
	 }else if(this.keyboard.isDown(Phaser.Keyboard.D)){
		        this.player.animations.play('player_run_right');
                this.directionFacing = 'right';
        		this.player.body.velocity.x = 175;
	 } else{
		  if(this.directionFacing == 'right'){
                this.player.animations.play('player_idle_right');
		  } else if(this.directionFacing == 'left'){
				this.player.animations.play('player_idle_left');
		  }
          
		 this.player.body.velocity.x = 0;
	 }
	 
	  	 
	 
	 if(this.keyboard.isDown(Phaser.Keyboard.W) && this.player.body.onFloor()){

		this.player.body.velocity.y = -190;
	
		 
		 
	 } else if (this.keyboard.isDown(Phaser.Keyboard.S)){
		if(this.player.body.position.y + 10 > 489){
			 this.player.body.velocity.y = 0
		}else{
		this.player.body.velocity.y = 175;
		}
		
	 } else{
		// this.player.body.velocity.y = 0;
	 }
	
},
Win: function(){
	game.state.start('win',false);
	
}
}