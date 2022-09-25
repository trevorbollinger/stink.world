let img;

function preload(){
	fart = loadSound('sounds/fart.mp3');

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
}

function setup() {
	createCanvas(1512,860);
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


	for(j = 0; j < people.length; j++){
		people[j].locaiton = square;
		controlling.location = square;
	}

	//vars
	currentScene = "main";
	debug = true;
	menuBarHeight = 75;
	padding = 10;
	shitmsg = false;
	
	//UI
	slot1 = [padding, (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2)];
	slot2 = [(padding*2)+slot1[2],slot1[1], slot1[2],slot1[3]]
}

function draw() {
	noStroke();
	
	if(currentScene == "main"){
		main();
	} else if(currentScene == "changePlayer"){
		changePlayer();
	}

	if(debug==true){
		fill("white");
		textSize(20)
		text(mouseX+", "+mouseY, mouseX+30, mouseY-10); 
		text(currentScene, 10,20);
		//text(controlling.location.name,10,50);
	}

	//print(controlling.shitUrge);

	//print(controlling.location.name);
	
}

function randomPlayer(){
	controlling = random(people);
}

function mainScreen(){
	fart.play();
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



