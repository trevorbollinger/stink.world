let img;

function setup() {
	createCanvas(1512,860);

	//people
	trevor = new person("Trevor Bollinger");
	andrew = new person("Andrew Smith");
	jared = new person("Jared Koelzer");
	bayley = new person("Bayley Haddix");
	mason = new person("Mason Siragusa");
	aj = new person("AJ Siragusa");
	jace = new person("Jace Blackman");
	audra = new person("Audra Krebs");
	nathan = new person("Nathan Madvig");

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


	//vars
	controlling = mason;
	people = [trevor, andrew, jared, bayley, mason, aj, jace, audra, nathan];
	images = [trevorImg, andrewImg, jaredImg, bayleyImg, masonImg, ajImg, jaceImg, audraImg, nathanImg];
	debug = false;
	menuBarHeight = 75;
	padding = 10;
	buttonWidth = (550/2)-10;

	testButton= new button();
	testButton2= new button();
}

function draw() {
	background("lightgray");
	
	for(i = 0; i <  people.length; i++){
		if(people[i] != controlling){
			people[i].inControl = false;
		} else {
			people[i].inControl = true;
		}
	}

	for(i = 0; i<people.length; i++){
		people[i].image = images[i];
		people[i].update();

		for(z = 0; z<people.length; z++){
			if(people[i].isNear(people[z]) && people[i] != people[z]){
				print(people[i].name + " is near " + people[z].name)
			}
		}

	}

	physics();

	//print(controlling.yvel);


	/* USER INTERFACE */

	if(debug==true){
		fill("white");
		textSize(15)
		text(mouseX+", "+mouseY, mouseX+30, mouseY-10); 
	}

	fill("brown");
	rect(0,(canvas.height) - menuBarHeight, (canvas.width), menuBarHeight);

	fill("white");
	textSize(20);
	text(":) "+controlling.name, buttonWidth*2 + padding*3,((canvas.height)) - menuBarHeight/1.65);
	text("Shit Urge: "+ controlling.shitUrge, buttonWidth*2 + padding*3, ((canvas.height)) - menuBarHeight/4.56)


	slot1 = [padding, (((canvas.height))-menuBarHeight+padding), buttonWidth, menuBarHeight-20];
	slot2 = [(padding*2)+slot1[2],slot1[1], slot1[2],slot1[3]]

	testButton.update(slot1[0],slot1[1],slot1[2],slot1[3],"orange", "Change Player", 30, 26, 37, randomPlayer);
	testButton2.update(slot2[0],slot2[1],slot2[2],slot2[3],"orange", "Shit", 30, 100, 37);
}

function randomPlayer(){
	controlling = random(people);
}