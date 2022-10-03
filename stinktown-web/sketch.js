let img;

function preload(){
	fart = loadSound('sounds/fart.mp3');
	boom = loadSound('sounds/boom.mp3');



	trevorImg = loadImage('images/trevor.jpg');
	andrewImg = loadImage('images/andrew.jpg');
	jaredImg = loadImage('images/jared.jpg');
	bayleyImg = loadImage('images/bayley.jpg');
	masonImg = loadImage('images/mason.jpg');
	ajImg = loadImage('images/aj.jpg');
	jaceImg = loadImage('images/jace.jpg');
	audraImg = loadImage('images/audra.jpg');
	nathanImg = loadImage('images/nathan.jpg');
	defaultImg = loadImage('images/gihun.jpg');

	applebeesImg = loadImage('images/applebees.jpeg');
	grassImg = loadImage('images/grass.jpg');
}

function setup() {
	createCanvas(1512,860);
	frameRate(60);
	pixelDensity(1);

	//people
	aj = new person("AJ Siragusa");
	andrew = new person("Andrew Smith");
	audra = new person("Audra Krebs");
	bayley = new person("Bayley Haddix");
	jace = new person("Jace Blackman");
	jared = new person("Jared Koelzer");
	mason = new person("Mason Siragusa");
	nathan = new person("Nathan Madvig");
	trevor = new person("Trevor Bollinger");

	people = [aj, andrew, audra, bayley, jace, jared, mason, nathan, trevor]
	images = [ajImg, andrewImg, audraImg,bayleyImg,jaceImg,jaredImg,masonImg,nathanImg,trevorImg]

	controlling = random(people);

	//colors
	backgroundColor = '#2b2d42';
	buttonColor = '#818CA1';
	buttonMouseOverColor = '#757E93';
	buttonPressedColor = '#5C6378';

	//buttons
	buttonWidth = (550/2)-10;

	changePlayerButton= new button();
	shitButton= new button();
	menuButton = new button();
	backButton = new button();

	ajButton = new button();
	andrewButton = new button();
	audraButton = new button();
	bayleyButton = new button();
	jaceButton = new button();
	jaredButton = new button();
	masonButton = new button();
	nathanButton = new button();
	trevorButton = new button();

	//buildings
	applebees = new building(100,100,250,175, applebeesImg, "Applebees");
	applebees.shittable = true;
	square = new building((canvas.width/2)-300-controlling.xc, (canvas.height/2)-1100-controlling.yc, 600, 600, defaultImg, "Square");
	square.shittable = false;

	squaree = new building((canvas.width/2)-300-controlling.xc, (canvas.height/2)-0-controlling.yc, 600, 600, defaultImg, "Square");
	squaree.shittable = false;

	nb = new building(-100000, -100000, 0, 0, defaultImg, "n");
	nb.shittable = false;


	for(j = 0; j < people.length; j++){
		people[j].locaiton = square;
		controlling.location = square;
	}

	//vars
	currentScene = "main";
	debug = false;
	menuBarHeight = 60;
	menuBar = canvas.height - menuBarHeight;
	padding = 5;
	shitmsg = false;
	toast = new toasts("", 50);
	toastd = new toasts("", 100 + padding);
	upTime = 0;
	
	//UI
	slot1 = [padding, (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2)];
	slot2 = [(padding*2)+slot1[2],slot1[1], slot1[2],slot1[3]]



}
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

	upTime+=0.014
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



