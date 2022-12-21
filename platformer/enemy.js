function enemy(x,y,width,height){
	this.x=-10000;
	this.y=-10000;
	this.width=width;
	this.height=height;	
	this.xvel=0;
	this.yvel=0;
	this.x=this.x;
	this.y=this.y;
	this.speed=0.25;
	this.color=(255,0,0);
	this.maxSpeed=4;
	this.startingx=x;
	this.startingy=y;
	this.st=0;
	this.gracePeriod=2;


	this.update = function(nx,ny,nwidth,nheight){

		if(this.speed>this.maxSpeed) this.speed=this.maxSpeed;
		
		this.speed+=0.0005;

		this.st+=0.01666666666;

		fill(this.color);
		rect(this.x,this.y,this.width,this.height);

		if(this.st>this.gracePeriod){
			this.x+=this.xvel;
			this.y+=this.yvel;
		}

		if(this.x<player.x){
			if(this.xvel<this.maxSpeed){
				this.xvel+=this.speed;
			}
		} else if(this.x>player.x){
			if(this.xvel>this.maxSpeed*-1){
				this.xvel-=this.speed;
			}
		}
		if(this.y<player.y){
			if(this.yvel<this.maxSpeed){
				this.yvel+=this.speed;
			}
		} else if(this.y>player.y){
			if(this.yvel>this.maxSpeed*-1){
				this.yvel-=this.speed;
			}
		}

		if(collide(player,this)==true && player.timer<0){
			player.lives--;
			player.timer=player.it;

			//this.x=player.x+200;
			//make enemy move somewhere else or add temporary invulnerability after life loss
		}

	}


}