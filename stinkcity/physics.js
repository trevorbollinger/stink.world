function physics(){
	
}

function collide(o1,o2){ //collision detection
	if(o1.x+o1.width-o1.interactionDistance > o2.x && o1.y+o1.height-o1.interactionDistance > o2.y && o1.y<o2.y+o2.height+o1.interactionDistance && o1.x<o2.x+o2.width+o1.interactionDistance){
		return true;
	}
}
