function setup() {
	createCanvas(600,600);
	frameRate(60);
	pixelDensity(1);

	//Control using arrow keys, params x,y,width,height
	player = new player(30,570,30,30);

	//Terrain pieces, rectangles, can be re-defined per level
	block1 = new terrain();
	block2 = new terrain();
	block3=  new terrain();
	block4 = new terrain();

	lwall = new terrain();
	rwall = new terrain();
	twall = new terrain();
	bwall = new terrain();

	//default enemy, black square that chases you around
	enemy1 = new enemy((canvas.width/2)-(player.width/2),-30,20,20);

	//buttons, call in any level with new params x,y,width,height,color,text,textXOffset,textYOffset
	menu1 = new button();
	blvl1 = new button();
	blvl2 = new button();
	blvl3 = new button();

	//pick ups
	life1 = new life();

	debug=true;
	columns=3; // columns in level select screen
	level=0; //0 = menu, -1 = death screen
	timeAlive=0;
	highScore=0;
	bnum=0;
}

function draw() {
	print(player.yvel);
	//print(player.red);
	if(debug==true){
		fill("white");
		text(mouseX+", "+mouseY, mouseX+30, mouseY-10); 
	}

	//level control
	if(level==-1) gameOver();
	else if(level==0) menu();
	else if(level==1) level1();
	else if(level==2) level2();
	else if(level==3) level3();
	else if(level==4) level4();
	else if(level==5) level5();
	else if(level==6) level6();
	else if(level==7) level7();
	else if(level==8) level8();
	else if(level==9) level9();
	else if(level==10) leve10();
	else if(level==11) level11();
	else if(level==12) level12();
	else if(level==13) level13();
	else if(level==14) level14();
	else if(level==15) level15();

	if(timeAlive>highScore) highScore=timeAlive;

	timeAlive+=0.01666666666;

}

function collide(o1,o2){
	if(o1.x+o1.width>o2.x && o1.y+o1.height>o2.y && o1.y<o2.y+o2.height && o1.x<o2.x+o2.width){
		return true;
	}
}

function mouseOver(o2){
	if(mouseX>o2.x && mouseY>o2.y && mouseY<o2.y+o2.height && mouseX<o2.x+o2.width){
		return true;
	}
}

//returns what side o1 is on relative to o2 in a string. not very useful as it turns out
function getSide(o1,o2){	
	if(o1.x+o1.width-7<o2.x && o1.y+o1.height>=o2.y && o1.y<o2.y+o2.height){
		return("left");
	}
	if(o1.x+7>o2.x+o2.width && o1.y+o1.height>=o2.y && o1.y<o2.y+o2.height){
		return("right");
	}
	if(o1.y-7+o1.height<o2.y && o1.x+o1.width>o2.x && o1.x<o2.x+o2.width){
		return("top");
	}
	if(o1.y+7>o2.y+o2.height && o1.x+o1.width>o2.x && o1.x<o2.x+o2.width){
		return("bottom");
	}
}

function reset(){
	//call to reset at start of a new level, ie after pressing button to enter level
	menu1.down=false;
	blvl1.down=false;
	blvl2.down=false;
	blvl3.down=false;

	player.x=player.startingx;
	player.y=player.startingy;
	enemy1.x=enemy1.startingx;
	enemy1.y=enemy1.startingy;
	life1.pickedUp=false;
	player.lives=3;
	player.xvel=0;
	player.yvel=0;
	enemy1.xvel=0;
	enemy1.yvel=0;
	player.timer=2;
	player.invulnerable=false;
	timeAlive=0;
	enemy1.speed=0.25;
	life1.lt=0;
}

function ui(r,g,b){
	//call in a level to display UI info: draw background, show lives, home button
	background(r,g,b);
	textSize(25);
	fill(255);
	text("Score: "+Math.round(timeAlive),15,105);
	//text("Lives: "+lives,20,75);

	for(h=1; h<=player.lives; h++){ //visual lives indicator
		fill("red");
		rect((h*30)-10, 55, 20,20);
	}

	menu1.update(20,20,80,25,"orange","Home",12,24,17);
	if(menu1.down==true){ //home button
		level=0;
		reset();
	}
}

function gameOver(){ //Death Screen
	background(143, 158, 167);
	textSize(70);
	text("Dead", 210,140);
	menu1.update((canvas.width*2/4)-(blvl1.width/2),(canvas.height*2/4)-(blvl1.height/2),100,50, "red", "Main Menu",16,11	,32);
	if(menu1.down==true){
		level=0;
		reset();
	}
}

function menu(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");

	background(143, 158, 167);
	textSize(70);
	text("Game Title", 120,110);
	if(blvl1.down==true){
		level=1;
		reset();
	}
	if(blvl2.down==true){
		level=2;
		reset();
	}
	if(blvl3.down==true){
		level=3;
		reset();
	}
	block1.update(blvl1.x,blvl1.y,blvl1.width,blvl1.height,"black");
	block2.update(blvl2.x,blvl2.y,blvl2.width,blvl2.height,"black");
	block3.update(blvl3.x,blvl3.y,blvl3.width,blvl3.height,"black");
	blvl1.update((canvas.width*1/(columns+1))-(blvl1.width/2),200,100,50,"orange","Level 1",23,13,32);
	blvl2.update((canvas.width*2/(columns+1))-(blvl1.width/2),200,100,50,"orange","Level 2",23,13,32);
	blvl3.update((canvas.width*3/(columns+1))-(blvl1.width/2),200,100,50,"orange","Level 3",23,13,32);
	player.update();
}

function level1(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");
	ui(51, 102, 255);
	block1.update(300,550,100,50,"red");
	block2.update(380,470,100,50, "red");
	
	//block3.update(200,200,100,50,"green");
	block4.update(430,170,100,100, "purple");
	life1.update(200,200,40,40);
	block4.canCollide=false;
	enemy1.update();
	player.update();
}

function level2(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");
	ui(100,200,100);
	block1.update(300,550,20,100,"pink");
	enemy1.update();
	player.update();
	life1.update(200,300,40,40);

}

function level3(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");
	ui(200,100,100);

	block1.update(100,500,300,120,"yellow");
	block2.update(200,450,300,120,"yellow");
	block3.update(400,60,300,200,"pink");
	enemy1.update();
	player.update();
	life1.update(200,200,40,40);
}

function level4(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");

	enemy1.update();
	player.update();
}

function level5(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");

	enemy1.update();
	player.update();

}

function level6(){
	bwall.update(0,canvas.height,canvas.width,50, "black");
	twall.update(0,-50,canvas.width,50, "black");
	lwall.update(-50,0,50,canvas.height,"black");
	rwall.update(canvas.width,0,50,canvas.height,"black");

	enemy1.update();
	player.update();
}

function level7(){

}

function level8(){

}

function level9(){

}

function level10(){

}

function level11(){

}

function level12(){

}

function level13(){

}

function level14(){

}

function level15(){

}


