function changePlayer(){
	fill(backgroundColor);
	rect(slot1[0], slot1[1]-((slot1[3]) * people.length + (padding*people.length))-padding*3, slot1[2],slot1[3]+((20 + slot1[3]) * people.length), 10);
	
	changePlayerButton.update(slot1[0],slot1[1],slot1[2],slot1[3],"buttonColor", "back", 30, 26, 37, mainScreen);

	ajButton.update(    slot1[0], (slot1[1]-(11*(slot1[3]))) 		, slot1[2], slot1[3], buttonColor, "AJ",     30, 26, 37, switchAJ    );
	andrewButton.update(slot1[0], (slot1[1]-10*(slot1[3])+padding)  , slot1[2], slot1[3], buttonColor, "Andrew", 30, 26, 37, switchAndrew);
	audraButton.update( slot1[0], (slot1[1]-9*(slot1[3])+padding*2) , slot1[2], slot1[3], buttonColor, "Audra",  30, 26, 37, switchAudra );
	bayleyButton.update(slot1[0], (slot1[1]-8*(slot1[3])+padding*3) , slot1[2], slot1[3], buttonColor, "Bayley", 30, 26, 37, switchBayley);
	jaceButton.update(  slot1[0], (slot1[1]-7*(slot1[3])+padding*4) , slot1[2], slot1[3], buttonColor, "Jace",   30, 26, 37, switchJace  );
	jaredButton.update( slot1[0], (slot1[1]-6*(slot1[3])+padding*5) , slot1[2], slot1[3], buttonColor, "Jared",  30, 26, 37, switchJared );
	masonButton.update( slot1[0], (slot1[1]-5*(slot1[3])+padding*6) , slot1[2], slot1[3], buttonColor, "Mason",  30, 26, 37, switchMason );
	nathanButton.update(slot1[0], (slot1[1]-4*(slot1[3])+padding*7) , slot1[2], slot1[3], buttonColor, "Nathan", 30, 26, 37, switchNathan);
	trevorButton.update(slot1[0], (slot1[1]-3*(slot1[3])+padding*8) , slot1[2], slot1[3], buttonColor, "Trevor", 30, 26, 37, switchTrevor);
}



function mainscene(){

	BORDER = 2000;

	background("green");

	for(q = -2*BORDER; q < BORDER*4; q+=2000){
		//image(grassImg, q-controlling.xc, controlling.yc, 2000, 2000);
		for(w = -2*BORDER; w < BORDER*4; w+=2000){
			image(grassImg, q-controlling.xc, w-controlling.yc, 2000, 2000);
		}
	}

	

	square.update();
	squaree.update();
	applebees.update();
	
	for(i = 0; i<people.length; i++){
		if(people[i].alive){
			people[i].image = images[i];
			people[i].update();
		}
		
	}

	for(i = 0; i <  people.length; i++){
		if(people[i] != controlling) people[i].inControl = false;
		else people[i].inControl = true;

		if(people[i].truex > BORDER-people[i].width)
			people[i].x = canvas.width/2;

		if(people[i].truey > BORDER-people[i].height)
			people[i].y = canvas.height/2;

		if(people[i].truex < -1*BORDER+people[i].width)
			people[i].x = canvas.width/2;
	
		if(people[i].truey < -1*BORDER+people[i].height)
			people[i].y = canvas.height/2;
		
	}

	fill("black");
	rect(BORDER-controlling.xc, -1*BORDER-controlling.yc, 50, BORDER*2); //right
	rect(-1*BORDER-controlling.xc, -1*BORDER-controlling.yc, BORDER*2, 50); //top
	rect(-1*BORDER-controlling.xc, -1*BORDER-controlling.yc, 50, BORDER*2); //left
	rect(-1*BORDER-controlling.xc, BORDER-controlling.yc, BORDER*2+50, 50); //bottom


	drawMenuBar();
	
}

function drawMenuBar(){
	fill(backgroundColor);
	rect(0,(canvas.height) - menuBarHeight, (canvas.width), menuBarHeight);
	
	//Buttons
	changePlayerButton.update(slot1[0],slot1[1],slot1[2],slot1[3], buttonColor, "Change Player", 30, 26, 37, openChangePlayer);
	shitButton.update(slot2[0],slot2[1],slot2[2],slot2[3], buttonColor, "Shit", 30, 100, 37, controlling.shit);



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










