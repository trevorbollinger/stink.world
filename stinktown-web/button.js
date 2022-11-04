function button(){
	this.color = 'red';
	this.down=false;
	this.used = false;

	this.update = function(x,y,width,height,color,words,size,xp,yp,func,id){
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

		if(this == actionButton){
			textSize(16);
			text("[Space]",this.x+106,this.y+43);
		}

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

			func(id);
		}
	}
}

function mouseOver(o2){
	if(mouseX>o2.x && mouseY>o2.y && mouseY<o2.y+o2.height && mouseX<o2.x+o2.width){
		return true;
	}
}

function toasts(t, yv){
	textSize(30);
	this.t = t;
	this.time = 6;
	this.showTime = 5;
	this.visible = false;
	this.width = textWidth(this.t);
	this.height = 50;
	this.y = yv;

	this.show = function(newT, distTime){
		textSize(30);
		this.t = newT;
		this.width = textWidth(this.t);
		this.x = (canvas.width / 2) - (this.width / 2);
		this.showTime = distTime;
		this.visible = true;
		this.time = 0
	}

	this.update = function(){
		textSize(30);
		if(this.visible){
			fill(backgroundColor);
			rect(this.x, this.y, this.width+(padding*2), this.height,5);
			fill("white");
			text(this.t, this.x+padding, this.y+33);
		}

		//Toast is visible for this.showTime duration in seconds*
		this.time+=.014;
		if(this.time > this.showTime) {
			this.visible = false;
		} 
		else {
			this.visible = true;
		} 

	}

	
}