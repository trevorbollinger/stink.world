function person(n){
	this.height = 40
	this.width = 40;
	this.x = ((canvas.width/2) - (this.width))+(this.width)+random(-300,300);
	this.y = ((canvas.height/2) - (this.height)+(this.width)+random(-300,300));

	this.maxSpeed=10;

	this.xc = 0;
	this.yc = 0;

	this.truex = this.x+this.xc;
	this.truey = this.y+this.yc;

	this.accel = 0.2;
	this.decelModifier=5;

	this.upV = 0; //North Velocity
	this.rightV = 0; //East Velocity	
	this.downV = 0; //South Velocity
	this.leftV = 0; //West Velocity

	this.name = n;
	this.alive = true;
	this.health = 100;
	this.money = 100;
	this.shitUrge = 69;
	this.interactionDistance = 60;
	this.strokeWidth = 5;
	this.highlighted = false;
	this.nearSomeone = false;
	this.edgeDistance = 50;

	this.update = function(){
		this.truex = this.x+this.xc;
		this.truey = this.y+this.yc;
		noStroke();

		for(q=0; q<people.length; q++){

			if(people[q] == controlling){
				people[q].highlighted = true
			}

			if(controlling.isNear(people[q])){
				people[q].highlighted = true;
			} else {
				people[q].highlighted = false;
			}
		}

		if(this == controlling){
			fill("red");
			rect(this.x-this.strokeWidth, this.y-this.strokeWidth, this.width+(this.strokeWidth*2), this.height+(this.strokeWidth*2));
		}

		if(this.highlighted == true){
			fill("white");
			rect((this.x-controlling.xc)-this.strokeWidth, (this.y-controlling.yc)-this.strokeWidth, this.width+(this.strokeWidth*2), this.height+(this.strokeWidth*2));
		}

		fill("blue");

		if(this == controlling){
			rect(this.x,this.y,this.height,this.width);
			image(this.image, this.x,this.y,this.height,this.width);

		} else {
			rect(this.x-controlling.xc,this.y-controlling.yc,this.height,this.width);
			image(this.image, this.x-controlling.xc,this.y-controlling.yc,this.height,this.width);
		}

		

		


		if(this.upV<0) this.upV=0;
		if(this.downV<0) this.downV=0;
		if(this.leftV<0) this.leftV=0;
		if(this.rightV<0) this.rightV=0;

		if(this.x < this.edgeDistance) this.x = this.edgeDistance;
		if(this.x > canvas.width - this.edgeDistance) this.x = canvas.width - this.edgeDistance;
		if(this.y < this.edgeDistance) this.y = this.edgeDistance;
		if(this.y > canvas.height - this.edgeDistance - menuBarHeight) this.y = canvas.height - this.edgeDistance- menuBarHeight;


		if(this.y > this.edgeDistance){
			this.y -= this.upV;
		} else {
			this.yc -= this.upV;
		}

		if(this.y < canvas.height - this.edgeDistance - menuBarHeight){
			this.y+=this.downV;
		} else {
			this.yc+=this.downV;
		}

		if(this.x > this.edgeDistance) {
			this.x-=this.leftV;
		} else {
			this.xc-=this.leftV;
		}

		if(this.x < canvas.width - this.edgeDistance){
			this.x+=this.rightV;
		} else {
			this.xc+=this.rightV;
		}

		


		if(keyIsDown(UP_ARROW) || keyIsDown(87)){	//UP MOVEMENT
			if(controlling.upV<controlling.maxSpeed){
				controlling.upV+=controlling.accel;
			}
		} else {
			if(this.upV>0){
				this.upV-=this.accel*this.decelModifier;
			}
		}

		if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){ 	//DOWN MOVEMENT
			if(controlling.downV<controlling.maxSpeed){
				controlling.downV+=controlling.accel;
			}
		} else {
			if(this.downV>0){
				this.downV-=this.accel*this.decelModifier;
			}
		}

		if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){		//LEFT MOVEMENT
			if(controlling.leftV<controlling.maxSpeed){
				controlling.leftV+=controlling.accel;
			}
		} else {
			if(this.leftV>0){
				this.leftV-=this.accel*this.decelModifier;
			}
		}

		if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){		//RIGHT MOVEMENT	
			if(controlling.rightV<controlling.maxSpeed){
				controlling.rightV+=controlling.accel;
			}
		} else {
			if(this.rightV>0){
				this.rightV-=this.accel*this.decelModifier;
			}
		}
	}

	this.isNear = function(p){
		this.distancex = this.x - p.x+controlling.xc;
		this.distancey = this.y - p.y+controlling.yc;
		if(this.distancex < this.interactionDistance && this.distancex > -1*this.interactionDistance && this != p){
			if(this.distancey < this.interactionDistance && this.distancey > -1*this.interactionDistance){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
}