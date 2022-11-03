function building(x,y,width,height, img,n){

	//actual x and y on the canvas
	this.truex = x;
	this.truey = y;
	this.width = width; 
	this.height = height;
	this.img = img;
	this.truex = x;
	this.truey = y;
	this.shittable;
	this.name = n;

	
	//offset amount that other items are moving with the world
	//subtract controlling.these from any coordinates to anchor to the world
	//also defines 0,0
	this.xc = -1000 + 244;
	this.yc = -1000 + 570;

	//x and y coordinates in extended map
	this.x = this.truex+this.xc; 
	this.y = this.truey+this.yc;

	this.update = function (){
		fill("grey");
		rect(this.x-controlling.xc, this.y-controlling.yc ,this.width, this.height);
		image(img, this.x-controlling.xc, this.y-controlling.yc ,this.width, this.height);
	}

}