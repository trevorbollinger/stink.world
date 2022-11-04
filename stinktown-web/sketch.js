//game loop
function draw() {

	//print("Player: " + controlling.scene + ", Display: " + displayScene + ", Loc: " + controlling.rightV	);
	//print(testfork.truex);
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
		text("x: " + Math.round(controlling.x) + ", y: " + Math.round(controlling.y), 10, 50);
		text("truex: " + Math.round(controlling.truex) + ", truey: " + Math.round(controlling.truey), 10, 80);
	}

	upTime+=(1/60);
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
			setLocation(p, 0, 0);
		}
	}
}

function setLocation(p, x, y){
	p.truex = canvas.width / 2;
	p.truey = canvas.height / 2;

	p.xc = 1*x - (canvas.width/2);
	p.yc = 1*y - (canvas.height/2);
}














