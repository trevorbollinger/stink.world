function setup() {
	en = 5;
	var canvas = createCanvas(500,500);
	canvas.parent("falling-game");
	player = new player(200,200,13);
	enemies = [];
	for(var e = 0; e<en; e++){
		enemies.push(new enemy(random(0,canvas.width), random(0,50)));
	}
	reset = new button(canvas.width/2-110/2,400,110,60,"Reset");
	gameEnd=true;
	frameRate(60);
	timeAlive = 0;
	highscore = 0;
}

function draw() {
	print(enemies[1].speed);
	//DEBUG console.log(gameEnd + ",   " + player.x + ", " + player.y + "  " + player.isVisible);
	if(gameEnd===false) {
		background(50,50,50);

		for(var e = 0; e<en; e++){
			enemies[e].isVisible = true;
			enemies[e].update();
			enemies[e].draw();
		}

		player.isVisible=true;
		player.draw();
		player.update();

		if(timeAlive<30){ //point delivery system
			timeAlive+=0.01666666666666666667; //basically 1/s
		} else if (timeAlive<200 && timeAlive>=30){
			timeAlive+=0.022; //a bit more than 1/s
		} else {
			timeAlive+=0.028; //just a bit more than a bit more than 1/s
		}

		fill("red");
		textSize(30);
		text("Score: " + Math.round(timeAlive), 190,470);
		if(timeAlive>highscore) highscore=timeAlive;
	} else if(gameEnd===true){
		player.isVisible=false;
		for(e; e<en; e++){
			enemies[e].isVisible=false;
		}

		background(200);
		textSize(80);
		fill("white");
		text("Game Over", 40,250);
		reset.draw("blue");
		text("Score: " + Math.round(timeAlive),210, 320);
		text("High Score: "+Math.round(highscore), 190,350);

		if(clicked(reset)===true || keyIsDown("Space")){
			console.log("clicked");
			gameEnd=false;
			player.x = player.startingx;
			player.y = player.startingy;
			timeAlive=0;
			for(var e = 0; e<en; e++){
				enemies[e].x = random(0,500);
				enemies[e].y = random(0,500);
				enemies[e].speed = 2;
			}

			player.upV = 0; //North Velocity
			player.rightV = 0; //East Velocity	
			player.downV = 0; //South Velocity
			player.leftV = 0; //West Velocity
		}
		player.draw();
		player.update();
		for(e; e<en; e++){
			enemies[e].draw();
			enemies[e].update();
		}

	}


	for(var e = 0; e<en; e++){
		if(isTouching(player,enemies[e]) === true){
			gameEnd=true;
		}
	}

} //END DRAW 

function isTouching(q,w){
	if(q.x+q.width>w.x && q.x<w.x+w.width && q.y+q.height>w.y && q.y<w.y+w.height){
		return true;
	}
}

function clicked(i){
	if(mouseX>i.x && mouseX<i.x+i.width && mouseY>i.y && mouseY<i.y+i.height){
		if(mouseIsPressed){
			return true;
		}
	}


}


