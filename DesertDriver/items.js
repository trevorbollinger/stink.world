function Cactus(x,y){
	this.x=x;
	this.y=y;
	this.width=48;
	this.height=148;
	this.scl=0;
	this.s;
	this.scl1=3;
	this.scl2=1.85;
	this.scl3=1;

	this.defx=this.x;
	this.defy=y;
	this.defwidth=this.width;
	this.defheight=this.height;
	this.defscl=this.scl;

	this.update = function(){
		noStroke();
		fill("green");

		if(this.s==1){
			image(c1, this.x+xo,this.y+yo,27*this.scl1,24*this.scl1);
			this.hbx=this.x+15;
			this.hby=this.y;+2;
			this.hbwidth=42;
			this.hbheight=70;
		}
		else if(this.s==2){
			image(c2, this.x+xo,this.y+yo,46*this.scl2,41*this.scl2);
			this.hbx=this.x+20;
			this.hby=this.y+2;
			this.hbwidth=50;
			this.hbheight=70;
		}
		else if(this.s==3){
			this.hbx=this.x+2;
			this.hby=this.y+2;
			this.hbwidth=38;
			this.hbheight=49;
			image(c3, this.x+xo,this.y+yo,42*this.scl3,54*this.scl3);
		}
//		rect(this.x+xo,this.y+yo,this.width,this.height);

		if(showHitBoxes==true){
			fill("green");
			rect(this.hbx+xo,this.hby+yo,this.hbwidth,this.hbheight);
		}
	}	
}

function Trophy(){
	this.x=random(-1300,1300);
	this.y=random(-1300,1300);
	this.active=true;
	this.scl=1.8;
	this.hbx=this.x;
	this.hby=this.y;
	this.hbwidth=this.width;
	this.hbheight=this.height;

	this.update = function(){

		
		this.hbx=this.x;
		this.hby=this.y;+2;
		this.hbwidth=42;
		this.hbheight=40;

		if(this.active==false){
			this.x=-30000;
			this.y=-30000;
		} else {
			image(trophy,this.x+xo, this.y+yo,23*this.scl,22*this.scl);
		}
		if(showHitBoxes==true){
			fill("brown");
			rect(this.hbx+xo,this.hby+yo,this.hbwidth,this.hbheight);
		}
	}
}

function Candy(x,y){
	this.x=x;
	this.y=y;
	this.active=true;
	this.scl=1.6;
	this.hbx=this.x;
	this.hby=this.y;
	this.hbwidth=this.width+10;
	this.hbheight=this.height+10;

	this.update = function(){
		
		this.hbx=this.x+40;
		this.hby=this.y+35;
		this.hbwidth=42+10;
		this.hbheight=40+10;

		if(this.active==false){
			this.x=-30000;
			this.y=-30000;
		} else {
			image(ca,this.x+xo, this.y+yo,100*this.scl,100*this.scl);
		}
		if(showHitBoxes==true){
			fill("orange");
			rect(this.hbx+xo,this.hby+yo,this.hbwidth,this.hbheight);
		}
	}
}