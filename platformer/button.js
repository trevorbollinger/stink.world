function button(){
		this.r=255;
		this.g=165;
		this.b=0;
	this.down=false;
	this.update = function(x,y,width,height,color,words,size,xp,yp){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.color=color;
		this.text=text;
		this.words=words;
		this.xp=xp;
		this.yp=yp;
		
		fill(this.r,this.g,this.b);
		rect(this.x,this.y,this.width,this.height);
		fill("white");
		textSize(size);
		text(this.words,this.x+this.xp,this.y+this.yp);
		if(mouseOver(this)){
			if(mouseIsPressed==true){
				this.r=185;
				this.g=95;
				this.b=0;
				this.down=true;
			} else {
				this.r=205;
				this.g=115;
				this.b=0;
				this.down=false;
			}
		} else {
			this.r=255;
			this.g=165;
			this.b=0;
		}
	}
}