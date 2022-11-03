//game loop
function draw() {

	//print("Player: " + controlling.scene + ", Display: " + displayScene + ", Loc: " + controlling.rightV	);
	print(applebees.x);
	noStroke();
	
	//scene controller
	if(displayScene == "overworld"){
		overworld();
	}
	if(displayScene == "changePlayer"){
		changePlayer();
	}
	if(displayScene == "forkliftArenaInterior"){
		forkliftArenaInterior();
	}

	toast.update();
	toastd.update();

	if(debug==true){
		fill("white");
		textSize(20)
		text(mouseX+", "+mouseY, mouseX+30, mouseY-10); 
		text(displayScene, 10,20);
		text(Math.round(controlling.x) + ", " + Math.round(controlling.y), 10, 50);
		text(controlling.accel, 10, 80);
	}

	upTime+=(1/60);
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


function switchDisplayScene(ds){
	displayScene = ds;
	updatePlayerScene(controlling);
}

function switchCharacter(per){
	controlling = per;
	updatePlayerScene(controlling);
	switchDisplayScene(controlling.scene);
}

function updatePlayerScene(p){
	if(displayScene != "changePlayer"){
		if(p.scene != displayScene){
			p.scene = displayScene;
			p.truex = canvas.width / 2;
			p.truey = canvas.height / 2;
			p.xc = -1000 + 244;
			p.xy = -1000 + 570;
		}
	}
}
















