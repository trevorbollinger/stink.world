function person(n){
	this.height = 40
	this.width = 40;
	this.x = ((canvas.width/2) - (this.width))+(this.width)+random(-300,300);
	this.y = ((canvas.height/2) - (this.height)+(this.width)+random(-300,300));

	this.maxSpeed=10;

	this.accel = 0.2;
	this.decelModifier=0.75;

	this.upV = 0; //North Velocity
	this.rightV = 0; //East Velocity	
	this.downV = 0; //South Velocity
	this.leftV = 0; //West Velocity

	this.name = n;
	this.alive = true;
	this.health = 100;
	this.money = 100;
	this.shitUrge = 69;

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


		//console.log(this.upV); //Debug

		if(keyIsDown(UP_ARROW) || keyIsDown(87)){	//UP MOVEMENT
			if(controlling.upV<controlling.maxSpeed){
				controlling.upV+=controlling.accel;
			}
		} else {
			if(controlling.upV>0){
				controlling.upV-=controlling.accel*controlling.decelModifier;
			}
		}

		if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){ 	//DOWN MOVEMENT
			if(controlling.downV<controlling.maxSpeed){
				controlling.downV+=controlling.accel;
			}
		} else {
			if(controlling.downV>0){
				controlling.downV-=controlling.accel*controlling.decelModifier;
			}
		}

		if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){		//LEFT MOVEMENT
			if(controlling.leftV<controlling.maxSpeed){
				controlling.leftV+=controlling.accel;
			}
		} else {
			if(controlling.leftV>0){
				controlling.leftV-=controlling.accel*controlling.decelModifier;
			}
		}

		if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){		//RIGHT MOVEMENT	
			if(controlling.rightV<controlling.maxSpeed){
				controlling.rightV+=controlling.accel;
			}
		} else {
			if(controlling.rightV>0){
				controlling.rightV-=controlling.accel*controlling.decelModifier;
			}
		}

	}
}