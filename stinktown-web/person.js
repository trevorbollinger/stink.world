function person(name){
	this.height = 40;
	this.width = 40;

	//actual x and y coordinates on the canvas
	this.truex = ((canvas.width/2) - (this.width))+(this.width)+random(-300,300);
	this.truey = ((canvas.height/2) - (this.height)+(this.width)+random(-300,300));


	//offset amount that other items are moving with the world
	//subtract these from any coordinates to anchor to the world
	this.xc = 0;
	this.yc = 0;

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
	this.shitIncrementer = 1/800
	this.interactionDistance = 30;
	this.strokeWidth = 2;
	this.highlighted = false;
	this.nearSomeone = false;
	this.edgeDistance = 70;
	this.location = "";
	this.accel = 0.2;
	this.decelModifier=5;

	this.update = function(){
		this.x = this.truex+this.xc;
		this.y = this.truey+this.yc;

		//updates for all people
		for(q=0; q<people.length; q++){

			
			if(people[q] == controlling) people[q].highlighted = true

			if(controlling.isNear(people[q])) people[q].highlighted = true;
			else people[q].highlighted = false;
	

			people[q].shitUrge += people[q].shitIncrementer;

			if(people[q].shitUrge >= 85 && people[q].shitUrge < 100){
				toast.show(people[q].name + " is about to shit theirself!", 5);
			}

			if(people[q].shitUrge >= 100){
				if(people[q].alive) boom.play();
				toastd.show(people[q].name + " has shit their pants and died!", 5);
				people[q].alive = false;
				people[q].shitUrge = 100;
			}

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

		//done up to here
		if (this == controlling){
			if (this.truex < this.edgeDistance)
				this.truex = this.edgeDistance;

			if (this.truex > canvas.width - this.edgeDistance - this.width)
				this.truex = canvas.width - this.edgeDistance - this.width;

			if (this.truey < this.edgeDistance)
				this.truey = this.edgeDistance;

			if (this.truey > canvas.height - this.edgeDistance - menuBarHeight - this.height)
				this.truey = canvas.height - this.edgeDistance- menuBarHeight - this.width;
		}
		
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
			if(this.rightV>0){ //DECELERATION
				this.rightV-=this.accel*this.decelModifier;
			}
		}
	}

	this.isNear = function(o2){
		if (this.x+this.width > o2.x-this.interactionDistance &&
			this.y+this.height> o2.y-this.interactionDistance &&
			this.y<o2.y+o2.height+this.interactionDistance &&
			this.x<o2.x+o2.width+this.interactionDistance &&
			this != o2)
			return true;
	}

	this.shit = function(){
		if(controlling.location.shittable == true){
			fart.play();
			controlling.shitUrge=0;
		} else {
			toast.show("GO TO APPLEBEES!!!", 5);
		}
	}
}





