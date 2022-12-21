function player(x,y,width,height){
	this.startingx=x;
	this.startingy=y;
	this.x=x
	this.y=y;
	this.width=width;
	this.height=height;
	this.color=(255,0,0);
	this.r=255;
	this.g=192;
	this.b=0;
	this.xvel=0;
	this.yvel=0;
	this.drag=40;
	this.gravity=1.07;
	this.maxspeed=10;
	this.decel=3.0;
	this.speed=1;
	this.padding=1;
	this.canJump=true;
	this.invulnerable=false;
	this.timer=0;
	this.lives=3;
	this.it=100; //time invulnerable after life loss 

	this.update = function(){
		fill(this.r,this.g,this.b);
		noStroke();
		rect(this.x,this.y,this.height,this.width);

		if(this.yvel<this.drag) this.yvel+=this.gravity; 

		this.timer--;

		this.y+=this.yvel;
		this.x+=this.xvel;

		if(keyIsDown(RIGHT_ARROW)){
			if(this.xvel<=this.maxspeed){
				if(this.xvel<0){
					this.xvel+=this.speed*this.decel;
				} else {
					this.xvel+=this.speed;
				}
			}
		
		} else if(keyIsDown(LEFT_ARROW)){
			if(this.xvel>=this.maxspeed*-1){
				if(this.xvel>0){
					this.xvel-=this.speed*this.decel;
				} else {
					this.xvel-=this.speed;
				}
			}
		} else {
			if(this.xvel<0) this.xvel+=1;
			if(this.xvel>0) this.xvel-=1;
		} 

		if(keyIsDown(DOWN_ARROW)){
			this.yvel+=2;
		}

		if(keyIsDown(UP_ARROW)){
			print("ljlk");
			this.yvel-=2;
		}

		if(this.xvel==0.5 || this.xvel==-0.5){
			this.xvel=0;
		}


		if(this.lives<=0) level=-1; //death
		if(this.timer<-10) this.timer=-10; 

		if(this.timer>0){ //makes the player flash violently if life lost
			if(this.red==true){
				this.r=255;
				this.g=0;
				this.b=0;
			}
			if(this.red==false){
				this.r=255;
				this.g=150;
				this.b=0;
			}
			if(this.g>=150){
				this.red=true;
			} else {
				this.red=false;
			}
		} else {
			this.r=255;
			this.g=150;
			this.b=0;
		}



	}
}

/* Legacy Jump
function keyPressed(){
	if(keyCode===UP_ARROW){
		player.yvel=-15;
	}

	if(keyCode===32){
		newLength= bullet.push();
		bullet[b] = new bullet(player.x,player.y,player.height,player.width);
	}
}

*/

