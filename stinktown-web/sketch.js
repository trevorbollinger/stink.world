//game loop
function draw() {

	noStroke();
	
	//scene controller
	if(currentScene == "main"){
		mainscene();
	} else if(currentScene == "changePlayer"){
		changePlayer();
	}

	toast.update();
	toastd.update();

	if(debug==true){
		fill("white");
		textSize(20)
		text(mouseX+", "+mouseY, mouseX+30, mouseY-10); 
		text(currentScene, 10,20);
		text(Math.round(controlling.truex) + ", " + Math.round(controlling.truey), 10, 50);
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
		this.time = 0;

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
		if(this.time > this.showTime) this.visible = false;
		else this.visible = true;

	}

	
}

function randomPlayer(){
	controlling = random(people);
}

function mainScreen(){
	currentScene = "main";
}

function openChangePlayer(){
	currentScene = "changePlayer";
}

function switchAJ(){
	controlling = aj;
	mainScreen();
}
function switchAndrew(){
	controlling = andrew;
	mainScreen();
}
function switchAudra(){
	controlling = audra;
	mainScreen();
}
function switchBayley(){
	controlling = bayley;
	mainScreen();
}
function switchJace(){
	controlling = jace;
	mainScreen();
}
function switchJared(){
	controlling = jared;
	mainScreen();
}
function switchMason(){
	controlling = mason;
	mainScreen();
}
function switchNathan(){
	controlling = nathan;
	mainScreen();
}
function switchTrevor(){
	controlling = trevor;
	mainScreen();
}



