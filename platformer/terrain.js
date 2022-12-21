function terrain(){
	this.update = function(x,y,width,height,color){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.color=color;
		this.canCollide=true;
		fill(this.color);
		rect(this.x,this.y,this.width,this.height);

		//left side COLLISION BLOCKAGE
		if(player.x+player.width+player.xvel > this.x && player.x+player.xvel < this.x+this.width/2 && player.y+player.height-2 > this.y && player.y < this.y+this.height+player.yvel && this.canCollide==true){
			player.xvel=0;
			player.x=this.x-player.width;
		}
		//right side
		if(player.x+player.xvel<this.x+this.width && player.x>this.x+this.width/2 && player.y+player.height-2 > this.y && player.y < this.y+this.height+player.yvel && this.canCollide==true){
			player.xvel=0;
			player.x=this.x+this.width;	
		}
		//top
		if(player.y+player.height+player.yvel>this.y&& player.y<this.y+this.height+player.yvel && player.x+player.width>this.x && player.x<this.x+this.width && this.canCollide==true){
			player.yvel*=-0.5; //boing
			player.y=this.y-player.width;
			player.onGround=true;
			player.onGround=true;
		} else {
			player.onGround=false;
		}
		//bottom
		if(player.y+player.yvel<this.y+this.height && player.y>this.y+this.height/2 && player.x+player.width>this.x && player.x<this.x+this.width && this.canCollide==true){
			player.yvel=0;
			player.y=this.y+this.height;
		}

		if(player.y+player.height+2>this.y && player.x+player.width>this.x && player.x<this.x+this.width && this.canCollide==true){
			player.canJump=true;
		} else {
			player.canJump=false;
		}
	}
}

