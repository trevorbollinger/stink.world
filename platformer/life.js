function life(){
	this.pickedUp=false;
	this.lt=0;
	
	this.update=function(x,y,width,height){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		if(this.lt>10){
			this.pickedUp=false;
			this.lt=0;	
		} 

		noStroke();
		fill("pink");
		if(this.pickedUp==false) rect(this.x,this.y,this.width,this.height);

		if(collide(this,player)==true && this.pickedUp==false){
			player.lives++;
			this.pickedUp=true;
		}
	}
}