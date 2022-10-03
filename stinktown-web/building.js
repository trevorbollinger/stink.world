function building(x,y,width,height, img,n){
	this.x = x;
	this.y = y;
	this.width = width; 
	this.height = height;
	this.img = img;
	this.truex = x;
	this.truey = y;
	this.shittable;
	this.name = n;

	this.update = function (){
		fill("grey");
		rect(this.x-controlling.xc, this.y-controlling.yc ,this.width, this.height);
		image(img, this.x-controlling.xc, this.y-controlling.yc ,this.width, this.height);


		this.truex = this.x;
		this.truey = this.y;

		if(controlling.isNear(this)){
			controlling.location = this;
		} else {
			controlling.location = nb;
		}

	}




}