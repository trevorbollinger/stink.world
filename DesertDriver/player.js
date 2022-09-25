function Player(){
	this.x=200;
	this.y=200;
	this.width=40;
	this.height=80;
	this.speed=4;
	this.ori="up";
	this.health=100;
	this.alive=true
	this.vulnerable=false;
	this.trophyCount=0;

	//hitbox
	this.hbx=this.x;
	this.hby=this.y;
	this.hbwidth=this.width;
	this.hbheight=this.height;

	//defaults of each variable, used in reset();
	this.defx=this.x;
	this.defy=this.y;
	this.defwidth=this.width;
	this.defheight=this.height;
	this.defspeed=this.speed;
	this.defori=this.ori;
	this.defhealth=this.health;
	this.defalive=this.alive;
	this.defvulnerable=true;

	this.update = function(){
		this.hbx=this.x;
		this.hbwidth=this.width;
		this.hbheight=this.height;

		if(isTouching(this,trophy1)){
			this.trophyCount+=0.5;
			trophy1.active=false;
			print("hello");
		}

		if(isTouching(this,trophy2)){
			this.trophyCount+=0.5;
			trophy2.active=false;
			print("hello");
		}
		if(isTouching(this,trophy3)){
			this.trophyCount+=0.5;
			trophy3.active=false;
			print("hello");
		}

		if(this.trophyCount>=3){
			level=2;
		}

		if(this.health>100) this.health=100;

		if(xo<border*-1) xo=border*-1;
		if(xo>border) xo=border;
		if(yo<border*-1) yo=border*-1;
		if(yo>border) yo=border;

		if(this.ori=="up"){
			image(jeepu, this.x,this.y);
			this.width=40;
			this.height=80;
			this.hby=this.y;
		} else if(this.ori=="down"){
			image(jeepd, this.x,this.y);
			this.width=40;
			this.height=80;
			this.hby=this.y;
		} else if(this.ori=="left"){
			image(jeepl, this.x,this.y+18);
			this.width=80;
			this.height=40;
			this.hby=this.y+18;
		} else if(this.ori=="right"){
			image(jeepr, this.x,this.y+18);
			this.width=80;
			this.height=40;
			this.hby=this.y+18;
		}

		//debug, hitbox drawer
		if(showHitBoxes===true){
			fill("white");
			rect(this.hbx,this.hby,this.hbwidth,this.hbheight);
		}

		if(keyIsDown(RIGHT_ARROW)){
			this.ori="right";
			if(this.x<400-player1.hbwidth){
				this.x+=this.speed;	
			} else {
				xo-=this.speed;
			}

		} else if(keyIsDown(LEFT_ARROW)){
			this.ori="left";
			if(this.x>200){
				this.x-=this.speed;
			} else {
				xo+=this.speed;
			}
		}

		if(keyIsDown(UP_ARROW)){
			this.ori="up";
			if(this.y>200){
				this.y-=this.speed;
			} else {
				yo+=this.speed;
			}

		} else if(keyIsDown(DOWN_ARROW)){
			this.ori="down";
			if(this.y<400-player1.hbheight){
				this.y+=this.speed;	
			} else {
				yo-=this.speed;
			}
		}

		if(this.health<=0){ //death
			this.health=0;
			this.alive=false;
		}
	}
}
