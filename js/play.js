var playState = {
create: function(){
	
	scrollPos = scrollPos + 0.25;
	isFirstRun = true;
	this.keyboard = game.input.keyboard;

	 this.currentEnemys = 0;
	 this.maxEnemys = 5;
	var stateText = game.add.text(game.world.centerX + scrollPos,game.world.centerY + scrollPos,' ', { font: '84px Arial', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);

	
	//Our Player
	this.player = game.add.sprite(200,475, 'player');
	this.player.animations.add('player_idle_right', [11],3,false);
	this.player.animations.add('player_idle_left', [2],3, false);
	this.player.animations.add('player_scan_left', [0,1,2,3,4],3,false);
	this.player.animations.add('player_scan_right', [9,10,11,12,13], 3, false);
	this.player.animations.add('player_run_right', [64,65,66,67,68,69,70], 10, true);
	this.player.animations.add('player_run_left' , [55,56,57,58,59,60,61,62], 10, true);
	this.player.animations.add('player_jump_right', [63],10,true);
	this.player.animations.add('player_jump_left', [54],10,true);
	this.directionFacing = 'right';
	this.player.anchor.setTo(0.5,0.5);
	
	 //  Our bullet group
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
	
    // The enemy
    chickens = game.add.group();
    chickens.enableBody = true;
    chickens.physicsBodyType = Phaser.Physics.ARCADE;
    chickens.createMultiple(30, 'chicken');
    chickens.setAll('anchor.x', 0.5);
    chickens.setAll('anchor.y', 1);
    chickens.setAll('outOfBoundsKill', true);
    chickens.setAll('checkWorldBounds', true);
	chickens.setAll('body.velocity.x', 0);
	chickens.setAll('facing', 'left')
	
chickens.forEach(function (chicken) {
	
		chicken.animations.add('walk_right', [0,1,2,3], 3, true);
		chicken.animations.add('walk_left', [6,7,8,9], 3, true);
		chicken.animations.add('die_right', [12,13,14,15,16,17], 15, false);
		chicken.animations.add('die_left', [18,19,20,21,22,23], 15, false);
		chicken.body.velocity.x = -25;
	});
	
	
	
	 var chick = chickens.create(scrollPos * 480, scrollPos * 250, 'chicken');
            chick.anchor.setTo(0.5, 0.5);
	

	game.physics.arcade.gravity.y = 250;
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	
},
update: function(){
		game.physics.arcade.enable(chickens);
	game.physics.arcade.overlap(bullets, chickens, collisionHandler, null, this);
	game.physics.arcade.overlap(this.player, chickens, endgame, null, this);
	game.physics.arcade.collide(this.player, layer);

	game.physics.arcade.collide(chickens, layer);
	generateEnemy();
	
	function endgame(){
		this.player.kill();

       
		
		 chickens.callAll('kill');

game.add.text(300, 300, 'GAME OVER', {font: '25px Arial', fill: '#ffffff'});

       
	}
	
	//if (this.nextEnemyAt < this.time.now && chickens.countDead() > 0) {
	  //    this.nextEnemyAt = this.time.now + this.enemyDelay;
  //  var enemy = chickens.getFirstExists(false);
      // spawn at a random location top of the screen
    //  enemy.reset(this.rnd.integerInRange(scrollPos + 300, scrollPos + 600), 400);
      // also randomize the speed
	//}
	
   
	function generateEnemy(){
		if(this.currentEnemys < this.maxEnemys){
		var chick = chickens.create(scrollPos * 480, scrollPos * 250, 'chicken');	//chickens.create(game.world.randomX + scrollPos, game.world.randomY + 100, 'chicken')

		currentEnemys++;
		} else{
			
		}
	

		}
		
	

function collisionHandler (bullet, chicken) {
game.world.remove(scoreText);
    
  
	bullet.kill();
  

    chicken.kill();
    // Increase the score
     scoreString = 'Score : ';
   	scoreText = game.add.text(this.game.camera.width/2, 565, scoreString + score, { font: '34px Arial', fill: '#fff' });
	scoreText.anchor.setTo(0.5,0.5);
	scoreText.fixedToCamera = true;
	score += 100;
        scoreText.text = scoreString + score;
	
 stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;


 if(this.currentEnemys = 1){
	 this.currentEnemys = 0;
 } else{
	  this.currentEnemys = this.current - 1;
 }
generateEnemy();
	}
		
 
	
	scrollPos = scrollPos + 0.25;
game.physics.arcade.overlap(bullets, chickens, collisionHandler, null,this);
	//game.physics.arcade.overlap(bullets, enemyPool, collisionHandler, null,this);

	
	if(isFirstRun == true){
		//this.enemy.animations.play('walk_left',3,true,false);
		//enemy.body.velocity.x = -25
		isFirstRun = false;
	}
	
	



	 //game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);
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
	if(score >= 500){
		this.Win;
	}
},
Win: function(){
	game.state.start('win',false);
	
}
}