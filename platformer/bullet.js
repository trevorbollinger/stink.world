function bullet(x,y,width,height){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;


	this.update = function(){




		fill("black");
		rect(this.x,this.y,this.width,this.height);
	}
}