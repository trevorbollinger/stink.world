function changePlayer(){
	fill(backgroundColor);
	rect(slot1[0], slot1[1]-((slot1[3]) * people.length + (padding*people.length))-padding*3, slot1[2],slot1[3]+((20 + slot1[3]) * people.length), 10);
	
	changePlayerButton.update(slot1[0],slot1[1],slot1[2],slot1[3],"buttonColor", "back", 30, 26, 37, mainScreen);

	ajButton.update(    slot1[0], (slot1[1]-(11*(slot1[3]))) , slot1[2], slot1[3], buttonColor, "AJ", 30, 26, 37, switchAJ);
	andrewButton.update(slot1[0], (slot1[1]-10*(slot1[3])+padding) , slot1[2], slot1[3], buttonColor, "Andrew", 30, 26, 37, switchAndrew);
	audraButton.update( slot1[0], (slot1[1]-9*(slot1[3])+padding*2) , slot1[2], slot1[3], buttonColor, "Audra", 30, 26, 37, switchAudra);
	bayleyButton.update(slot1[0], (slot1[1]-8*(slot1[3])+padding*3) , slot1[2], slot1[3], buttonColor, "Bayley", 30, 26, 37, switchBayley);
	jaceButton.update(  slot1[0], (slot1[1]-7*(slot1[3])+padding*4) , slot1[2], slot1[3], buttonColor, "Jace", 30, 26, 37, switchJace);
	jaredButton.update( slot1[0], (slot1[1]-6*(slot1[3])+padding*5) , slot1[2], slot1[3], buttonColor, "Jared", 30, 26, 37, switchJared);
	masonButton.update( slot1[0], (slot1[1]-5*(slot1[3])+padding*6) , slot1[2], slot1[3], buttonColor, "Mason", 30, 26, 37, switchMason);
	nathanButton.update(slot1[0], (slot1[1]-4*(slot1[3])+padding*7) , slot1[2], slot1[3], buttonColor, "Nathan", 30, 26, 37, switchNathan);
	trevorButton.update(slot1[0], (slot1[1]-3*(slot1[3])+padding*8) , slot1[2], slot1[3], buttonColor, "Trevor", 30, 26, 37, switchTrevor);
}

function main(){
	background("green");

	applebees.update();
	square.update();

	//square
	fill("lightgrey");
	rect((canvas.width/2)-300-controlling.xc, (canvas.height/2)-300-controlling.yc, 600, 600);
	
	
	for(i = 0; i<people.length; i++){
		people[i].image = images[i];
		people[i].update();
	}

	for(i = 0; i <  people.length; i++){
		if(people[i] != controlling){
			people[i].inControl = false;
		} else {
			people[i].inControl = true;
		}
	}

	fill(backgroundColor);
	rect(0,(canvas.height) - menuBarHeight, (canvas.width), menuBarHeight);

	fill("white");
	textSize(20);
	text(":) " + controlling.name + " (" + Math.round(controlling.truex) + ", " + Math.round(controlling.truey) + ")", buttonWidth*2 + padding*3,((canvas.height)) - menuBarHeight/1.65);
	text("Shit Urge: "+ controlling.shitUrge + "%", buttonWidth*2 + padding*3, ((canvas.height)) - menuBarHeight/4.56)



	changePlayerButton.update(slot1[0],slot1[1],slot1[2],slot1[3], buttonColor, "Change Player", 30, 26, 37, openChangePlayer);
	shitButton.update(slot2[0],slot2[1],slot2[2],slot2[3], buttonColor, "Shit", 30, 100, 37, controlling.shit);
}
