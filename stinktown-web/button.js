function button(){
	this.r=255;
	this.g=165;
	this.b=0;
	this.down=false;
	this.used = false;

	this.update = function(x,y,width,height,color,words,size,xp,yp,func){
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

		if(mouseOver(this) && mouseIsPressed && this.used == false){
			this.used = true;
			func();
		}

		if(mouseOver(this)){
			if(mouseIsPressed==true){
				this.r=185;
				this.g=95;
				this.b=0;
				this.down = true;
			} else {
				this.r=205;
				this.g=115;
				this.b=0;
				this.down=false;
				this.used = false;
			}
		} else {
			this.r=255;
			this.g=165;
			this.b=0;
			this.used = false;
		}
	}
}

function mouseOver(o2){
	if(mouseX>o2.x && mouseY>o2.y && mouseY<o2.y+o2.height && mouseX<o2.x+o2.width){
		return true;
	}
}