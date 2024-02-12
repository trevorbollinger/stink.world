var ll;
var lns;

var priorities = ['P', 'R', 'I', 'O', 'R', 'I', 'T', 'I', 'E', 'S'];

// Define the Card class
class Card {
    constructor(text) {
        this.text = text;
        this.letter = priorities[randNum(priorities.length)];
    }
}

fetch('data/cards.txt')
.then(response => response.text())
.then(data => {
    var ll = data.split(/\r?\n/);
    var cds = [];

    for (var i = 0; i < ll.length; i++) {
        // Create a new Card object for each line and add it to the cds array
        cds.push(new Card(ll[i]));
    }

    lng = cds.length;

    CARDS = cds;
    cardsu = cds;

    // If you want to continue with your original code, you can replace ll with cds
    var listItems = "";
    for (var i = 0; i < cds.length; i++) {
        listItems += "<li><a href='#'>" + cds[i].text + "</a></li>";
    }

    // Get the unordered list element by its id
    var ul = document.getElementById('myUL');

    // Add the new list items to the existing unordered list
    ul.innerHTML += listItems;
})
.catch(error => console.error('Error:', error));
