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
	metalFloorImg = loadImage('images/metalfloor.jpg')
	forkliftImg = loadImage('images/forklift.jpg');
}

function setup() {
	createCanvas(1512,860);
	frameRate(60);
	pixelDensity(1);

	originx = (canvas.width / 2);
	originy = canvas.height / 2;

	//colors
	backgroundColor = '#2b2d42';
	buttonColor = '#818CA1';
	buttonMouseOverColor = '#757E93';
	buttonPressedColor = '#5C6378';

	//create people
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
	peopleCount = people.length;
	images = [ajImg, andrewImg, audraImg,bayleyImg,jaceImg,jaredImg,masonImg,nathanImg,trevorImg]

	for(i = 0; i<people.length; i++){
		people[i].image = images[i];
	}

	controlling = random(people);
	//create buttons
	buttonWidth = (550/2)-10;

	changePlayerButton= new button();
	fkButton = new button();
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

	//create buildings
	applebees = new building(100,100,250,175, applebeesImg, "Applebees");
	applebees.shittable = true;

	square = new building(originx - 300, originy - 300, 600, 600, defaultImg, "Square");
	square.shittable = false;

	forkliftArena = new building(originx-1000, originy-1000, 575, 475, forkliftImg, "Forklift Arena");
	forkliftArena.shittable = false;


	for(j = 0; j < people.length; j++){
		people[j].locaiton = square;
		controlling.location = square;
	}

	//vars

	displayScene = "overworld";
	debug = true;
	menuBarHeight = 60;
	menuBar = canvas.height - menuBarHeight;
	padding = 5;
	shitmsg = false;
	toast = new toasts("", 50);
	toastd = new toasts("", 100 + padding);
	upTime = 0;
	toastCount = 0;

	
	//UI
	slot1 = [padding, (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-(padding*2)];
	slot2 = [(padding*2)+slot1[2],slot1[1], slot1[2],slot1[3]]














}