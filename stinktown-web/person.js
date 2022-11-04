function person(name){
	this.height = 40;
	this.width = 40;

	//actual x and y coordinates on the canvas
	this.truex = ((canvas.width / 2) + random(-400,400));
	this.truey = ((canvas.height / 2) + random(-400,400));


	//offset amount that other items are moving with the world
	//subtract controlling.these from any coordinates to anchor to the world
	//also defines 0,0
	this.xc = 0 - (canvas.width/2);
	this.yc = 0 - (canvas.height/2);

	//x and y coordinates in extended map
	this.x = this.truex+this.xc; 
	this.y = this.truey+this.yc;

	this.upV = 0; //North Velocity
	this.rightV = 0; //East Velocity	
	this.downV = 0; //South Velocity
	this.leftV = 0; //West Velocity

	this.name = name;
	this.alive = true;
	this.health = 100;
	this.money = 100;
	this.maxSpeed=10;
	this.shitUrge = random(0,75);
	this.shitIncrementer = 1/400;
	this.interactionDistance = 30;
	this.strokeWidth = 2;
	this.highlighted = false;
	this.nearSomeone = false;
	this.edgeDistance = 70;
	this.accel = .75;
	this.decelModifier=1.5;
	this.scene = defaultScene;

	

	this.update = function(){
		this.x = this.truex+this.xc;
		this.y = this.truey+this.yc;

		//updates for all people
		for(q=0; q<people.length; q++){
			if(people[q] == controlling) people[q].highlighted = true

			if(controlling.isNear(people[q])) people[q].highlighted = true;
			else people[q].highlighted = false;
		}

		this.shitUrge += this.shitIncrementer;

		if(this.shitUrge >= 85 && this.shitUrge < 100){
			toast.show(this.name + " is about to shit their pants!", 3);
		}

		if(this.shitUrge >= 100){
			if(this.alive) boom.play();
			toastd.show(this.name + " has shit their pants and died!", 3);
			this.alive = false;
			this.shitUrge = 100;
		}

		//red border
		if(this == controlling){
			fill("red");
			rect(this.truex-this.strokeWidth,
				 this.truey-this.strokeWidth,
				 this.width+(this.strokeWidth*2),
				 this.height+(this.strokeWidth*2));
		}

		//white border
		if(this.highlighted == true){
			fill("white");
			rect((this.x-controlling.xc)-this.strokeWidth,
				 (this.y-controlling.yc)-this.strokeWidth,
				  this.width+(this.strokeWidth*2), 
				  this.height+(this.strokeWidth*2));
		}

		if(this == controlling){
			//rect(this.truex,this.truey,this.height,this.width);
			image(this.image, this.truex,this.truey,this.height,this.width);

		} else {
			fill("red");
			rect(this.x-controlling.xc,
				 this.y-controlling.yc,
				 this.height,this.width);

			image(this.image, this.x-controlling.xc,
				  this.y-controlling.yc,this.height,this.width);
		}

		if(this.upV<0) this.upV=0;
		if(this.downV<0) this.downV=0;
		if(this.leftV<0) this.leftV=0;
		if(this.rightV<0) this.rightV=0;
		
		if (this.truey > this.edgeDistance)
			this.truey -= this.upV;
		else 
			this.yc -= this.upV;
			
		if (this.truey < canvas.height - this.edgeDistance - menuBarHeight - this.height)
			this.truey+=this.downV;
		else
			this.yc+=this.downV;
			
		if (this.truex > this.edgeDistance)
			this.truex-=this.leftV;
		else 
			this.xc-=this.leftV;

		if (this.truex < canvas.width - this.edgeDistance - this.width)
			this.truex+=this.rightV;	
		else 
			this.xc+=this.rightV;


		if(controlling == this){
			if(keyIsDown(UP_ARROW) || keyIsDown(87)){	//UP MOVEMENT
				if(this.upV<this.maxSpeed){
					this.upV+=this.accel;
				}
			} else {
				if(this.upV>0){
					this.upV-=this.accel*this.decelModifier;
				}
			}

			if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){ 	//DOWN MOVEMENT
				if(this.downV<this.maxSpeed){
					this.downV+=this.accel;
				}
			} else {
				if(this.downV>0){
					this.downV-=this.accel*this.decelModifier;
				}
			}

			if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){		//LEFT MOVEMENT
				if(this.leftV<this.maxSpeed){
					this.leftV+=this.accel;
				}
			} else {
				if(this.leftV>0){
					this.leftV-=this.accel*this.decelModifier;
				}
			}

			if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){		//RIGHT MOVEMENT	
				if(this.rightV<this.maxSpeed){
					this.rightV+=this.accel;
				}
			} else {
				if(this.rightV>0){ //DECELERATION
					this.rightV-=this.accel*this.decelModifier;
				}
			}
		} else {
			if(this.rightV>0){ //DECELERATION
				this.rightV-=this.accel*this.decelModifier;
			}
			if(this.leftV>0){
					this.leftV-=this.accel*this.decelModifier;
			}
			if(this.downV>0){
					this.downV-=this.accel*this.decelModifier;
			}
			if(this.upV>0){
				this.upV-=this.accel*this.decelModifier;
			}
		}
	}

	this.isNear = function(o2){
		if (this.x+this.width > o2.x-this.interactionDistance &&
			this.y+this.height > o2.y-this.interactionDistance &&
			this.y<o2.y+o2.height+this.interactionDistance &&
			this.x<o2.x+o2.width+this.interactionDistance &&
			this != o2)
			return true;
	}

	this.shit = function(){
		if(controlling.isNear(applebees)){
			fart.play();
			controlling.shitUrge=0;
		} else {
			toast.show("GO TO APPLEBEES!!!", 2);
		}
	}
}













