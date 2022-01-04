function button(){
	this.color = 'red';
	this.down=false;
	this.used = false;

	this.update = function(x,y,width,height,color,words,size,xp,yp,func){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.text=text;
		this.words=words;
		this.xp=xp;
		this.yp=yp;
					
		fill(this.color);
		rect(this.x,this.y,this.width,this.height, 10);
		fill("white");
		textSize(size);
		text(this.words,this.x+this.xp,this.y+this.yp);

		if(mouseOver(this)){
			if(mouseIsPressed==true){
				this.color = buttonPressedColor;
				this.down = true;
			} else {
				this.color = buttonMouseOverColor;
				this.down=false;
				this.used = false;
			}
		} else {
			this.color = buttonColor;
			this.used = false;
		}

		if(mouseOver(this) && mouseIsPressed && this.used == false){
			this.used = true;

			func();
		}
	}
}

function mouseOver(o2){
	if(mouseX>o2.x && mouseY>o2.y && mouseY<o2.y+o2.height && mouseX<o2.x+o2.width){
		return true;
	}
}