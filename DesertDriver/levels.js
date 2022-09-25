/*
-1: Death Screen
0: Menu/Title Screen
>1: Levels
*/
 
function ui(){ //call in level to set ui
	fill("black");
	rect(0,600,600,100);

	fill("gray");
	rect(340,605,250,40);
	
	fill("red");
	rect(400,610,player1.health*1.8,30);

	fill("black");
	textSize(26);
	text(Math.round(player1.health),352,634);

	fill("white");
	textSize(28);
	text("Trophies Collected: "+Math.round(player1.trophyCount),20,633);
}

function reset(){ //resets all vars to default values
	spawnCacti(0);
	xo=0;
	yo=0;
	player1.x=player1.defx;
	player1.y=player1.defy;
	player1.width=player1.defwidth;
	player1.height=player1.defheight;
	player1.speed=player1.defspeed;
	player1.ori=player1.defori;
	player1.health=player1.defhealth;
	spawnCacti(0);
	player1.trophyCount=0;
}

function AssignLevels(){ // calls level function based on int "level"
	if(level==-1){
		DeathScreen()
	} 
	else if(level==0){
		MenuScreen();	
	} 
	else if(level==1){
		level1();
	} 
	else if(level==2){
		winScreen();
	} 
	else if(level==3){
		level3();	
	} 
}

function DeathScreen(){
	background("brown");

	textSize(60);
	fill("black");
	text("YOU DIED", 150,280);
	textSize(30);
	text("Click refresh to play again.",114,330);

	//click refresh to try again!
}

function MenuScreen(){
	noStroke();
	background("grey");
	fill("white");
	textSize(70);
	text("Desert Driver",93,220);
	textSize(30);
	text("Collect all 3 trophies to win.",114,270);
	respawnButton.update(0,320,2000,75,"black","Start", 30,270,48);
}

function level1(){
	respawnButton.update(-50000,-50000,200, 75, "red"," ", 20, 50, 45);
	background(254, 210, 78);
	for(var y=0; y<sandCount; y++){
		fill(284, 240, 118);
		rect(randx[y]+xo,randy[y]+yo, 4,4);
	}

	for(var i = 0; i < cacti.length; i++){ // updates the cacti
		cacti[i].update();
	}

	for(var r=0; r<candies.length; r++){
		candies[r].update();

		if(isTouching(player1,candies[r])){
			player1.health+=15;
			candies[r].active=false;
		}
	}



	player1.update();
	trophy1.update();
	trophy2.update();
	trophy3.update();

	if(player1.health<=0){
		level=-1;
	}

	for(var e = 0; e<cacti.length; e++){
		if(isTouching(player1,cacti[e]) === true){
			player1.health-=0.4;
		}
	}		
	ui();
}

function winScreen(){

	background("green");
	fill("black");
	textSize(55);
	text("Congratulations!", 95, 280);
	textSize(30);
	text("Click refresh to play again.",114,330);
	//click refresh to play again!
	
}
