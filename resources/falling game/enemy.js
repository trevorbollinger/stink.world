function enemy(x,y){
	this.x = x;
	this.y = y;
	this.width=30;
	this.height=60;
	this.isVisible=true;
	this.startingx = x;
	this.startingy = y;
	this.maxSpeed = 20;
	this.speed=1;

	this.draw = function(){
		if(this.isVisible===true){
			fill(255);
			rect(this.x,this.y,this.width,this.height);	
		}
	}

	this.update = function(){
		this.speed = this.speed+timeAlive/950;
		this.y+=this.speed;
		if(this.speed>this.maxSpeed) this.speed=this.maxSpeed
		if(this.speed<2) this.speed=3;
		if(this.y>550){
			this.y=random(-60,-25);
			this.x=random(this.width*-1,canvas.width+this.width);
		}
	}
}