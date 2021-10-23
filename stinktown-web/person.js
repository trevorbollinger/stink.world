function person(n){
	this.height = 40
	this.width = 40;
	this.x = ((canvas.width/4) - (this.width / 2))+(this.width / 2)+random(-300,300);
	this.y = ((canvas.height/4) - (this.height / 2)+(this.width / 2)+random(-300,300));

	this.xvel = 0;
	this.yvel = 0;
	this.acceleration = 1;

	this.name = n;
	this.alive = true;
	this.health = 100;
	this.money = 100;
	this.shitUrge = 69;

	this.update = function(){
		noStroke();
		fill("red");
		rect(this.x,this.y,this.height,this.width)

		this.x+=this.xvel;
		this.y+=this.yvel;

	}
}