var playState = {
create: function(){
	this.totalScore = 0;
	this.CurrentScore = game.add.text(this.game.camera.width/2, 575, "Score: " + this.totalScore );
		this.CurrentScore.anchor.setTo(0.5,0.5);
this.CurrentScore.fixedToCamera = true;

	 bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(500, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
   

   
	
	
	
	
	this.keyboard = game.input.keyboard;
	
	//player Code
	this.player = game.add.sprite(200,475, 'player');
	this.player.animations.add('player_idle_right', [9,10,11,12,13],3,false);
	this.player.animations.add('player_idle_left', [0,1,2,3,4],3, false);
	this.player.animations.add('player_run_right', [64,65,66,67,68,69,70], 10, true);
	this.player.animations.add('player_run_left' , [55,56,57,58,59,60,61,62], 10, true);
	this.player.animations.add('player_jump_right', [63],10,true);
	this.player.animations.add('player_jump_left', [54],10,true);

	
this.enemy = game.add.sprite((this.player.x + 475), 450, 'enemy');
	this.enemyPool = this.add.group();
    this.enemyPool.enableBody = true;
    this.enemyPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.enemyPool.createMultiple(50, 'enemy');
    this.enemyPool.setAll('anchor.x', 0.5);
    this.enemyPool.setAll('anchor.y', 0.5);
    this.enemyPool.setAll('outOfBoundsKill', true);
    this.enemyPool.setAll('checkWorldBounds', true);


    // Set the animation for each sprite
    this.enemyPool.forEach(function (enemy) {

	enemy.animations.add('walk_right', [0,1,2,3], 3, true);
	enemy.animations.add('walk_left', [6,7,8,9], 3, true);
	enemy.animations.add('die_right', [12,13,14,15,16,17], 15, false);
	enemy.animations.add('die_left', [18,19,20,21,22,23], 15, false);
	enemy.body.velocity.x = -25;
		});
	this.nextEnemyAt = 0;
    this.enemyDelay = 2500;
	
	this.enemy.animations.add('walk_right', [0,1,2,3], 3, true);
	this.enemy.animations.add('walk_left', [6,7,8,9], 3, true);
	this.enemy.animations.add('die_right', [12,13,14,15,16,17], 15, false);
	this.enemy.animations.add('die_left', [18,19,20,21,22,23], 15, false);
this.enemyFacing = 'left';
	game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
	this.enemy.anchor.setTo(0.5,0.5);
	this.enemy.range = 5;
	isFirstRun = true;



	this.directionFacing = 'right';
	game.physics.arcade.gravity.y = 250;
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	this.player.anchor.setTo(0.5,0.5);
	//game.physics.arcade.enableBody(this.player, Phaser.Physics.ARCADE);
	//this.player.body.collide = true;
	//this.player.body.bounce.y = 0.8;
	//this.player.body.allowGravity = true;
	 // game.camera.follow(backGround);
	//this.win = game.add.sprite(500, 256, 'win');
	//game.physics.enable(this.win, Phaser.Physics.ARCADE);
	
	//this.player.boundsPadding = -10;
},
update: function(){
	
	
	game.physics.arcade.collide(this.player, layer);
	game.physics.arcade.collide(this.enemyPool, layer);
	game.physics.arcade.collide(this.enemy, layer);
	
	
	if (this.nextEnemyAt < this.time.now && this.enemyPool.countDead() > 0) {
      this.nextEnemyAt = this.time.now + this.enemyDelay;
      var enemy = this.enemyPool.getFirstExists(false);
      // spawn at a random location top of the screen
      enemy.reset(this.rnd.integerInRange(scrollPos + 300, scrollPos + 600), 400);
      // also randomize the speed
	}
	
   //if(this.enemyFacing == 'right'){
	//	this.enemy.play('die_right');
	//	this.enemy.body.velocity.x = 25;
	//	} else {
	//		this.enemy.animations.play('die_left');
	//		this.enemy.body.velocity.x = -25;
	//	 
   // }
	
	function generateEnemy(){
		
	this.enemy = game.add.sprite((scrollPos + 475), 400, 'enemy');
//this.enemy.animations.add('walk_right', [0,1,2,3], 3, true);
//this.enemy.animations.add('walk_left', [7,8,9,10], 3, true);
//this.enemy.animations.add('die_right', [12,13,14,15,16,17], 3, false);
//this.enemy.animations.add('die_left', [18,19,20,21,22,23], 3, false);
	//this.enemyFacing = 'left';
	game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
	
	//this.enemy.anchor.setTo(0.5,0.5);
	//this.enemy.rangeLeft = 15;
	//this.enemy.rangeRight = 15;
	game.physics.arcade.collide(this.enemy, layer);
//this.enemy.revive();
		}
		
	if(playState.totalScore >= 300){
		this.Win;
	}

	
	  //  
		//} 
		
		
		
 function moveEnemy(){
	baddieMover = game.rnd.integerInRange(1, 2);
	 //code stolen then modified from help request on html5gamedevs. http://www.html5gamedevs.com/topic/7706-please-help-with-enemy-movement-using-a-timer/
	  if (this.enemy.x  > this.enemy.startX - this.enemy.range && baddieMover == 2) {
          baddieMover = 1; // enemy is too far left, so move it right
        }
        else if (this.enemy.x  < this.enemy.startX + this.enemy.range && baddieMover == 1) {
          baddieMover = 2; // enemy is too far right, so move it left
        }
        if (this.baddieMover == 1) {
		this.enemy.body.velocity.x = 25;
		this.enemy.animations.play('walk_right', 3, true, false);
	}
	else if (this.baddieMover == 2) {
		this.enemy.body.velocity.x = -25;
		this.enemy.animations.play('walk_left', 3, true, false);
	}
	else {
		//this.enemy.body.velocity.x = 0;
		//this.enemy.animations.stop();
	}
 }
 
 	
function increaseScore(totalScore,CurrentScore){
	if(this.enemyFacing == 'right'){
		this.enemy.animations.play('die_right',15, false, true);
		
	} else{
		this.enemy.animations.play('die_left',15, false, true);
		
	}
game.time.events.remove(moveEnemy);
	updateScore();
	generateEnemy();

	
}	

 
game.time.events.loop(Phaser.Timer.SECOND *3,moveEnemy, this); 
	
	scrollPos = scrollPos + 0.25;
	game.physics.arcade.overlap(bullets, this.enemy, increaseScore, null,this);
	game.physics.arcade.overlap(bullets, this.enemyPool, increaseScore, null, this);
	
	if(isFirstRun == true){
		this.enemy.animations.play('walk_left',3,true,false);
		enemy.body.velocity.x = -25
		isFirstRun = false;
	}
	
	


function updateScore(totalScore, CurrentScore){
	playState.totalScore = playState.totalScore + 100;
	playState.CurrentScore= ("Score: " + playState.totalScore );

}

	 //game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);
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
	//console.log(Theta);
	
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