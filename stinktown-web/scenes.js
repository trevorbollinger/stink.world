function changePlayer(){
	fill(backgroundColor);
	rect(
		slot1[0]-padding, 
		slot1[1]-((slot1[3]) * people.length + (padding*people.length))-padding*3, 
		slot1[2] + (padding*2),
		slot1[3]+((20 + slot1[3]) * people.length), 
		10);
	
	changePlayerButton.update(slot1[0],slot1[1],slot1[2],slot1[3],"buttonColor", "back", 30, 26, 37, switchDisplayScene, controlling.scene);

	ajButton.update(    slot1[0], (slot1[1]-(10*(slot1[3]))) 		, slot1[2], slot1[3], buttonColor, "AJ",     30, 26, 37, switchCharacter, aj    );
	andrewButton.update(slot1[0], (slot1[1]-9*(slot1[3])+padding)  , slot1[2], slot1[3], buttonColor, "Andrew", 30, 26, 37, switchCharacter, andrew);
	audraButton.update( slot1[0], (slot1[1]-8*(slot1[3])+padding*2) , slot1[2], slot1[3], buttonColor, "Audra",  30, 26, 37, switchCharacter, audra );
	bayleyButton.update(slot1[0], (slot1[1]-7*(slot1[3])+padding*3) , slot1[2], slot1[3], buttonColor, "Bayley", 30, 26, 37, switchCharacter, bayley);
	jaceButton.update(  slot1[0], (slot1[1]-6*(slot1[3])+padding*4) , slot1[2], slot1[3], buttonColor, "Jace",   30, 26, 37, switchCharacter, jace  );
	jaredButton.update( slot1[0], (slot1[1]-5*(slot1[3])+padding*5) , slot1[2], slot1[3], buttonColor, "Jared",  30, 26, 37, switchCharacter, jared );
	masonButton.update( slot1[0], (slot1[1]-4*(slot1[3])+padding*6) , slot1[2], slot1[3], buttonColor, "Mason",  30, 26, 37, switchCharacter, mason );
	nathanButton.update(slot1[0], (slot1[1]-3*(slot1[3])+padding*7) , slot1[2], slot1[3], buttonColor, "Nathan", 30, 26, 37, switchCharacter, nathan);
	trevorButton.update(slot1[0], (slot1[1]-2*(slot1[3])+padding*8) , slot1[2], slot1[3], buttonColor, "Trevor", 30, 26, 37, switchCharacter, trevor);
}



function overworld(){

	BORDER = 2000;

	background("green");

	for(q = -2*BORDER; q < BORDER*4; q+=2000){
		//image(grassImg, q-controlling.xc, controlling.yc, 2000, 2000);
		for(w = -2*BORDER; w < BORDER*4; w+=2000){
			image(grassImg, q-controlling.xc, w-controlling.yc, 2000, 2000);
		}
	}

	

	square.update();
	applebees.update();
	forkliftArena.update();
	
	for(i = 0; i<people.length; i++){
		if(people[i].alive && people[i].scene == "overworld"){
			people[i].image = images[i];
			people[i].update();
		}
		
	}

	

	resistance = 10.4;

	for(i = 0; i <  people.length; i++){
		if(people[i] != controlling) people[i].inControl = false;
		else people[i].inControl = true;

		if(people[i].x > BORDER-people[i].width)
			people[i].truex -= resistance;

		if(people[i].y > BORDER-people[i].height)
			people[i].truey -= resistance;

		if(people[i].x < -1*BORDER+people[i].width)
			people[i].truex += resistance;
	
		if(people[i].y < -1*BORDER+people[i].height)
			people[i].truey += resistance;
	}

	fill("black");
	rect(BORDER-controlling.xc, -1*BORDER-controlling.yc, 50, BORDER*2); //right
	rect(-1*BORDER-controlling.xc, -1*BORDER-controlling.yc, BORDER*2, 50); //top
	rect(-1*BORDER-controlling.xc, -1*BORDER-controlling.yc, 50, BORDER*2); //left
	rect(-1*BORDER-controlling.xc, BORDER-controlling.yc, BORDER*2+50, 50); //bottom


	drawMenuBar();


	
}

function forkliftArenaInterior(){
	BORDER = 2000;

	background("gray");

	floorScale = 400;

	for(q = -2*BORDER; q < BORDER*4; q+=floorScale){
		//image(grassImg, q-controlling.xc, controlling.yc, 2000, 2000);
		for(w = -2*BORDER; w < BORDER*4; w+=floorScale){
			image(metalFloorImg, q-controlling.xc, w-controlling.yc, floorScale, floorScale);
		}
	}



	forkliftMechanic.update();

	testfork.update();
	
	for(i = 0; i<people.length; i++){
		if(people[i].alive && people[i].scene == "forkliftArenaInterior"){
			people[i].update();
		}
		
	}

	

	resistance = 10.4;

	for(i = 0; i <  people.length; i++){
		if(people[i] != controlling) people[i].inControl = false;
		else people[i].inControl = true;

		if(people[i].x > BORDER-people[i].width)
			people[i].truex -= resistance;

		if(people[i].y > BORDER-people[i].height)
			people[i].truey -= resistance;

		if(people[i].x < -1*BORDER+people[i].width)
			people[i].truex += resistance;
	
		if(people[i].y < -1*BORDER+people[i].height)
			people[i].truey += resistance;
	}

	fill("black");
	rect(BORDER-controlling.xc, -1*BORDER-controlling.yc, 50, BORDER*2); //right
	rect(-1*BORDER-controlling.xc, -1*BORDER-controlling.yc, BORDER*2, 50); //top
	rect(-1*BORDER-controlling.xc, -1*BORDER-controlling.yc, 50, BORDER*2); //left
	rect(-1*BORDER-controlling.xc, BORDER-controlling.yc, BORDER*2+50, 50); //bottom

	//forklift health bar
	healthBarWidth = (1000*(controlling.vehicle.health/100));
	hbx = canvas.width / 2 - (healthBarWidth / 2);
	hby = 740;
	hbheight = 20;
	if(controlling.vehicle != none){

		fill(backgroundColor);
		rect((canvas.width / 2 - (1000 / 2))-5, hby-5+30, 1000+(5*2), hbheight+(5*2), 10);

		fill("red");
		rect(hbx, hby+30, healthBarWidth, hbheight, 10);



		fill("white");
		textSize(20);
		text("Health: "+ Math.round(controlling.vehicle.health) + "%", (canvas.width / 2) - 55, hby + 47);
	}

	drawMenuBar();
}

function drawMenuBar(){
	fill(backgroundColor);
	rect(0,(canvas.height) - menuBarHeight, (canvas.width), menuBarHeight);
	
	//Buttons
	changePlayerButton.update(slot1[0],slot1[1],slot1[2],slot1[3], buttonColor, "Change Player", 30, 26, 37, switchDisplayScene, "changePlayer");
	//shitButton.update(slot2[0],slot2[1],slot2[2],slot2[3], buttonColor, "Shit", 30, 100, 37, controlling.shit);
	//actionButton.update((canvas.width/2)-(buttonWidth/2), (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2), buttonColor, "Enter", 29, 98, 27, switchDisplayScene, "forkliftArenaInterior");
	if(displayScene != "overworld" && controlling.vehicle == none){
		actionButton.update((canvas.width/2)-(buttonWidth/2), (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2), buttonColor, "Exit", 29, 106, 27, switchDisplayScene, "overworld");

	} else if(controlling.isNear(forkliftArena) && displayScene == "overworld"){
		actionButton.update((canvas.width/2)-(buttonWidth/2), (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2), buttonColor, "Enter", 29, 98, 27, switchDisplayScene, "forkliftArenaInterior");
		
	} else if(controlling.isNear(applebees) && displayScene == "overworld"){
		actionButton.update((canvas.width/2)-(buttonWidth/2), (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2), buttonColor, "Shit", 29, 106, 27, controlling.shit);

	} else if(controlling.isNear(forkliftMechanic) && displayScene == "forkliftArenaInterior"){
		actionButton.update((canvas.width/2)-(buttonWidth/2), (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2), buttonColor, "Repair", 29, 106, 27, repairFork);
	}



	//Bottom Right HUD
	imgSize = menuBarHeight-(padding*2)
	infoOne = controlling.name; //line one
	infoTwo = "Shit Urge: " + Math.round(controlling.shitUrge) + "%";

	//fill('rgba(100,100,0, 0.25)'); //rectangle of visualization
	//rect(canvas.width/2+padding, menuBar + padding, canvas.width/2-(padding*3)-imgSize, menuBarHeight-(padding*2));
	textSize(20);
	fill("white");
	text(infoOne, 
		canvas.width-(padding*3)-imgSize-textWidth(infoOne), 
		((canvas.height)) - menuBarHeight/1.65);

	text(infoTwo, 
		canvas.width-(padding*3)-imgSize-textWidth(infoTwo), 
		canvas.height - (menuBarHeight/4.56));


	image(controlling.image, canvas.width-imgSize-padding, menuBar+padding, imgSize, imgSize);

}


function keyPressed(){
	if(keyCode == 32){
		if(displayScene != "overworld" && controlling.vehicle == none){
			switchDisplayScene("overworld");
		} else if(controlling.isNear(applebees)){
			controlling.shit();
		} else if(controlling.isNear(forkliftArena)){
			switchDisplayScene("forkliftArenaInterior");
		} else if(controlling.isNear(forkliftMechanic) && displayScene == "forkliftArenaInterior"){
			controlling.vehicle.repair();
		}
	} else if(keyCode == 70){
		testfork.enter();
	}
}








