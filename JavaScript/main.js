var rawtext, lns, lng, cds, CARDS, cardsu;

class Card {
    constructor(text) {
        var priorities = ['P', 'R', 'I', 'O', 'R', 'I', 'T', 'I', 'E', 'S'];

        this.text = text;
        this.letter = priorities[randNum(priorities.length)];
    }
}

fetch('data/cards.txt')
.then(response => response.text())
.then(data => {
    var rawtext = data.split(/\r?\n/); //raw text data array
    var cds = []; //original object array

    for (var i = 0; i < rawtext.length; i++) {
        //insert rawtext into objects
        cds.push(new Card(rawtext[i]));
    }

    lng = cds.length; //init length

    //clone origin array
    CARDS = cds; //Static array, allow repeats
    cardsu = cds; //Unique cards array, deny repeats

    var listItems = "";
    for (var i = 0; i < cds.length; i++) {
        listItems += "<li><a href='#'>" + cds[i].text + "</a></li>";
    }

    var ul = document.getElementById('myUL');
    ul.innerHTML += listItems;
})
.catch(error => console.error('Error:', error));
