function button(x,y,w,h,tex){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.tex = tex;

	this.draw = function(c){
		noStroke();
		fill(c);
		rect(this.x,this.y,this.width,this.height);

		textSize(20);
		fill("white");
		text(this.tex, this.x+29, this.y+this.height/2+7);
	}
	this.clicked = function(){
		if(mouseX>this.x && mouseX<this.x+this.width && mouseY>this.y && mouseY<this.y+this.height){
			return true;
		}
	}


}