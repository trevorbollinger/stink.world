/*
AP COMPUTER SCIENCE PRINCIPLES
CREATE PROJECT
2018
*/

var cacti = [];
var candies = [];
var randx=[];
var randy=[];
var level = 0;
var xo = 0, yo = 0;
var border=1600;
var sandCount=1000;
var candyCount=4;

//density of cacti relative to the border's size
//cacti will always stay at the same density no matter the border's size.
var cactiDensity=3.9; //smaller number = more cacti

//debug
showHitBoxes=false;



function preload(){
	//player sprites
	jeepl=loadImage('https://i.imgur.com/wNF6bfl.png');
	jeepu=loadImage('https://i.imgur.com/GQii25W.png');
	jeepd=loadImage('https://i.imgur.com/M7x6bBT.png');
	jeepr=loadImage('https://i.imgur.com/3aMFQhI.png');

	//cacti sprite
	cac=loadImage("https://i.imgur.com/TZPKpq3.png");

	c1=loadImage("https://i.imgur.com/QrxWQ0C.png");
	c2=loadImage("https://i.imgur.com/QjMyJn6.png");
	c3=loadImage("https://i.imgur.com/e4YjUHq.png");

	//collectibles
	trophy=loadImage("https://i.imgur.com/tesEpu4.png");
	ca=loadImage("https://i.imgur.com/bjhsYCj.png");

}

function setup(){
	for(var y=0; y<sandCount; y++){
		randx[y]=random(border*-1, border+1000);
		randy[y]=random(border*-1, border+1000);
	}

	for(var t = 0; t<candyCount; t++){
		candies.push(new Candy(random(-1500,1500),random(-1500,1500)));
	}

	testCandy=new Candy(100,100);

	createCanvas(600,650);
	player1 = new Player();
	trophy1 = new Trophy();
	trophy2 = new Trophy(); //rand(-1800,1800),rand(-1800,1800) 
	trophy3 = new Trophy();
	respawnButton = new button();
	//cacti random generation
	spawnCacti(1);
	//checkPlayer();
}

function draw(){	
	//print(cacti[1].s)
	//player1.update();
	AssignLevels();	//sets which stage the game canvas will display.

	//testCandy.update();
	if(respawnButton.down==true){
		level=1;
		player1.alive=true;
		reset();
	}
}

function isTouching(q,w){ //collision detection
	if(q.hbx+q.hbwidth>w.hbx+xo && q.hbx<w.hbx+xo+w.hbwidth && q.hby+q.hbheight>w.hby+yo && q.hby<w.hby+yo+w.hbheight){
		return true;
	}
}	

function spawnCacti(n){
	if(n>0){
		for(var i = 0; i < border/cactiDensity; i++){
			cacti.push(new Cactus(random(border*-1, border+1000), random(border*-1, border+1000)));
			cacti[i].s=Math.round(random(1,3));
			if(isTouching(player1,cacti[i])){
				player1.x=cacti[i].x+cacti[i].width+5;
			}
		}
	}
}

function button(){
	this.r=255;		
	this.g=165;
	this.b=0;
	this.down=false;

	this.update = function(x,y,width,height,color,words,size,xp,yp){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.color=color;
		this.text=text;
		this.words=words;
		this.xp=xp;
		this.yp=yp;
		
		fill(this.r,this.g,this.b);
		rect(this.x,this.y,this.width,this.height);
		fill("white");
		textSize(size);
		text(this.words,this.x+this.xp,this.y+this.yp);
		if(mouseOver(this)){
			if(mouseIsPressed==true){
				this.r=185;
				this.g=95;
				this.b=0;
				this.down=true;
			} else {
				this.r=205;
				this.g=115;
				this.b=0;
				this.down=false;
			}
		} else {
			this.r=255;
			this.g=165;
			this.b=0;
			this.down=false;
		}
	}
}

function mouseOver(o2){
	if(mouseX>o2.x && mouseY>o2.y && mouseY<o2.y+o2.height && mouseX<o2.x+o2.width){
		return true;
	}
}

function checkPlayer(){
	for(var e = 0; e<cacti.length; e++){
		if(isTouching(player1,cacti[e])){
			player1.x=random(0,600);
			player1.y=random(0,600);
		}
	}
}