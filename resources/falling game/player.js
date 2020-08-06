function player(x,y,s){
	
	this.x = x;
	this.y = y;
	this.height=20;
	this.width=20;
	this.isVisible=true;
	this.startingx = x;
	this.startingy = y

	this.maxSpeed=s;

	this.accel = 0.69;
	this.decelModifier=0.75;

	this.upV = 0; //North Velocity
	this.rightV = 0; //East Velocity	
	this.downV = 0; //South Velocity
	this.leftV = 0; //West Velocity

	this.draw = function(){
		if(this.isVisible===true){
			fill("red");
			rect(this.x,this.y,this.width,this.height);
		}
	}

	this.update = function(){

		if(this.x>510) this.x=-20;
		if(this.y>510) this.y=-20;
		if(this.x<-21) this.x=509;
		if(this.y<-21) this.y=509;

		if(this.upV<0) this.upV=0;
		if(this.downV<0) this.downV=0;
		if(this.leftV<0) this.leftV=0;
		if(this.rightV<0) this.rightV=0;

		this.y-=this.upV;
		this.y+=this.downV+0.6;;
		this.x-=this.leftV;
		this.x+=this.rightV;


		//console.log(this.upV); //Debug

		if(keyIsDown(UP_ARROW)){	//UP MOVEMENT
			if(this.upV<this.maxSpeed){
				this.upV+=this.accel;
			}
		} else {
			if(this.upV>0){
				this.upV-=this.accel*this.decelModifier;
			}
		}

		if(keyIsDown(DOWN_ARROW)){ 	//DOWN MOVEMENT
			if(this.downV<this.maxSpeed){
				this.downV+=this.accel;
			}
		} else {
			if(this.downV>0){
				this.downV-=this.accel*this.decelModifier;
			}
		}

		if(keyIsDown(LEFT_ARROW)){		//LEFT MOVEMENT
			if(this.leftV<this.maxSpeed){
				this.leftV+=this.accel;
			}
		} else {
			if(this.leftV>0){
				this.leftV-=this.accel*this.decelModifier;
			}
		}

		if(keyIsDown(RIGHT_ARROW)){		//RIGHT MOVEMENT	
			if(this.rightV<this.maxSpeed){
				this.rightV+=this.accel;
			}
		} else {
			if(this.rightV>0){
				this.rightV-=this.accel*this.decelModifier;
			}
		}
	}
}