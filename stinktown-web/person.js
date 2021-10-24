function person(n){
	this.height = 40
	this.width = 40;
	this.x = ((canvas.width/2) - (this.width))+(this.width)+random(-300,300);
	this.y = ((canvas.height/2) - (this.height)+(this.width)+random(-300,300));

	this.maxSpeed=10;

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

	this.update = function(){
		noStroke();
		fill("red");
		rect(this.x,this.y,this.height,this.width)
		image(this.image, this.x,this.y, this.width, this.height);

		if(this.upV<0) this.upV=0;
		if(this.downV<0) this.downV=0;
		if(this.leftV<0) this.leftV=0;
		if(this.rightV<0) this.rightV=0;

		this.y-=this.upV;
		this.y+=this.downV;
		this.x-=this.leftV;
		this.x+=this.rightV;

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
		this.distancex = this.x - p.x;
		this.distancey = this.y - p.y;
		if(this.distancex < this.interactionDistance && this.distancex > - this.interactionDistance){
			if(this.distancey < this.interactionDistance && this.distancey > - this.interactionDistance){
				return true;
			}
		}
	}
}