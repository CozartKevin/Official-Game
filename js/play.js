var playState = {
create: function(){
	
	 bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(500, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
   
   
	
	
		
	
	this.keyboard = game.input.keyboard;
	this.player = game.add.sprite(200,475, 'player');
	this.player.animations.add('player_idle_right', [9,10,11,12,13],3,false);
	this.player.animations.add('player_idle_left', [0,1,2,3,4],3, false);
	this.player.animations.add('player_run_right', [64,65,66,67,68,69,70], 10, true);
	this.player.animations.add('player_run_left' , [55,56,57,58,59,60,61,62], 10, true);
	this.player.animations.add('player_jump_right', [63],10,true);
	this.player.animations.add('player_jump_left', [54],10,true);
	this.directionFacing = 'right';
	game.physics.arcade.gravity.y = 250;
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	this.player.anchor.setTo(0.5,0.5);
	//game.physics.arcade.enableBody(this.player, Phaser.Physics.ARCADE);
	//this.player.body.collide = true;
	//this.player.body.bounce.y = 0.8;
	//this.player.body.allowGravity = true;
	 // game.camera.follow(backGround);
	this.win = game.add.sprite(500, 256, 'win');
	game.physics.enable(this.win, Phaser.Physics.ARCADE);
	
	//this.player.boundsPadding = -10;
},
update: function(){
	game.physics.arcade.collide(this.player, layer);
	
	scrollPos = scrollPos + 0.25;
	 game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);
	backGround.position.x = (scrollPos);
	game.camera.x = scrollPos;

	 var Theta = Math.atan2((this.player.position.x) -(game.input.mousePointer.position.x + scrollPos), (this.player.position.y) - (game.input.mousePointer.position.y + scrollPos) * (180/Math.PI));

  //var Theta = game.physics.arcade.angleBetween(this.player, game.input.activePointer);
	//console.log(Theta);
	//console.log(game.input.mousePointer.position.x + scrollPos);
	//console.log(this.player.position.x);
	Theta /= (Math.PI/4);
	Theta = Math.round(Theta);
	Theta *= Math.PI/4;
	console.log(Theta);
	
  switch(Theta){
	  case 0:
	  
	  break;
	  case 1:
	  break;
	  case 2:
	  break;
	  case 3:
	  break;
	  case 4:
	  break;
	  case 5:
	  break;
	  case 6:
	  break;
	  case 7:
	  break;
	  case 8:
	  break;
	  default:
	  
	  
  }
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
	 
	  	 
	 function fire() {

    if (game.time.now > nextFire && bullets.countDead() > 0)
    {
        nextFire = game.time.now + fireRate;

        var bullet = bullets.getFirstDead();
		bullet.anchor.setTo(0.5,0.5)
        bullet.reset(playState.player.position.x , playState.player.position.y);
		bullet.rotation =  game.physics.arcade.angleToPointer(bullet)
      
		game.physics.arcade.moveToPointer(bullet, 1000);
    }

}

	 
	 if (game.input.activePointer.isDown)
    {
        fire();
    }

	 
	 if(this.keyboard.isDown(Phaser.Keyboard.W)){
		if(this.directionFacing == 'right'){
			this.player.animations.play('player_jump_right')
			
		} else if(this.directionFacing == 'left'){
			this.player.animations.play('player_jump_left')
		}
	 if(this.player.body.onFloor()){
		this.player.body.velocity.y = -190;
	 }
		 
		 
	 } else if (this.keyboard.isDown(Phaser.Keyboard.S)){
		if(this.player.body.position.y + 10 > 489){
			 this.player.body.velocity.y = 0
		}else{
	
		}
		
	 } else{
		// this.player.body.velocity.y = 0;
	 }
	
},
Win: function(){
	game.state.start('win',false);
	
}
}