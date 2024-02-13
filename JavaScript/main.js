var rawtext, lns, lng, cds, CARDS, cardsu;

class Card {
    constructor(text, part, stinky) {
        var priorities = ['P', 'R', 'I', 'O', 'R', 'I', 'T', 'I', 'E', 'S'];

        this.text = text;
        this.part = part;
        this.stinky = stinky;
        this.letter = priorities[randNum(priorities.length)];
    }
}

fetch('data/cards.xlsx')
.then(response => response.arrayBuffer())
.then(data => {
    var workbook = XLSX.read(new Uint8Array(data), {type: 'array'});
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    cds = []; //original object array

    xlData.forEach(function(row) {
        //insert row.text into objects
        cds.push(new Card(row.text, row.part, row.stinky));
    });

    shuffle(cds);
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